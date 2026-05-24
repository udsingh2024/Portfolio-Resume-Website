import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const CreativeCursor = () => {
  const mountRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Check if touch device - custom cursors are ignored on touch screens for responsiveness
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    // Add custom cursor hiding class on desktop mount
    document.documentElement.classList.add('custom-cursor-active');

    // --- State Variables ---
    const mouse = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let mouseSpeed = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    let isHovering = false;
    let hoverType = ''; // button | card | text | image | link
    let magneticTarget = null;

    // --- WebGL Setup (Three.js) ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Particle pool setup
    const maxParticles = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(maxParticles * 3);
    const colors = new Float32Array(maxParticles * 3);
    const sizes = new Float32Array(maxParticles);

    // Particle metadata arrays
    const particleData = [];
    for (let i = 0; i < maxParticles; i++) {
      particleData.push({
        active: false,
        x: 0, y: 0,
        vx: 0, vy: 0,
        age: 0, maxAge: 0,
        size: 0,
        color: new THREE.Color()
      });
    }

    // Custom circular texture for particles
    const createCircularTexture = () => {
      const size = 16;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.6)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 1,
      map: createCircularTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // --- Helpers to emit particles ---
    const spawnParticle = (x, y, vx, vy, colorHex, maxAge, size) => {
      // Find inactive particle slot
      const index = particleData.findIndex(p => !p.active);
      if (index === -1) return; // Pool full

      const p = particleData[index];
      // Convert browser screenspace to orthographic scene coordinates
      p.x = x - window.innerWidth / 2;
      p.y = window.innerHeight / 2 - y;
      p.vx = vx;
      p.vy = vy;
      p.active = true;
      p.age = 0;
      p.maxAge = maxAge;
      p.size = size;
      p.color.set(colorHex);
    };

    // --- Interactive Mouse Handlers ---
    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Show elements on first move
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';

      // Calculate speed for trailing emission boost
      const dx = mouse.x - lastMouseX;
      const dy = mouse.y - lastMouseY;
      mouseSpeed = Math.sqrt(dx * dx + dy * dy);

      lastMouseX = mouse.x;
      lastMouseY = mouse.y;

      // Spawn drifting trial particles based on speed
      const particleColors = ['#10b981', '#34d399', '#059669', '#3b82f6'];
      const spawnCount = Math.min(Math.floor(mouseSpeed * 0.25) + 1, 4);

      for (let i = 0; i < spawnCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.2;
        const vx = Math.cos(angle) * speed - (dx * 0.08); // offset velocity slightly opposite to drag
        const vy = -(Math.sin(angle) * speed - (dy * 0.08));

        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        spawnParticle(
          mouse.x + (Math.random() - 0.5) * 8,
          mouse.y + (Math.random() - 0.5) * 8,
          vx,
          vy,
          color,
          Math.random() * 40 + 20, // age limit
          Math.random() * 12 + 6 // size
        );
      }
    };

    const onClick = () => {
      // Trigger click explosion ripple particles
      const particleColors = ['#ffffff', '#10b981', '#34d399'];
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const speed = Math.random() * 3 + 2;
        const vx = Math.cos(angle) * speed;
        const vy = -Math.sin(angle) * speed;
        
        spawnParticle(
          mouse.x,
          mouse.y,
          vx,
          vy,
          particleColors[Math.floor(Math.random() * particleColors.length)],
          Math.random() * 30 + 15,
          Math.random() * 10 + 4
        );
      }

      // Small click animation on physical cursor
      gsap.to(dotRef.current, { scale: 0.6, duration: 0.1, yoyo: true, repeat: 1 });
      gsap.to(ringRef.current, { scale: 1.6, opacity: 0, duration: 0.4, onComplete: () => {
        gsap.set(ringRef.current, { scale: 1, opacity: 1 });
      }});
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('click', onClick, { passive: true });

    // --- Hover State Interceptor (Magnetic & Scales) ---
    const scanHoverables = () => {
      const interactiveEls = document.querySelectorAll('a, button, [data-hover], .project-sticky-card');

      interactiveEls.forEach((el) => {
        // Prevent registering hooks multiple times
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = 'true';

        el.addEventListener('mouseenter', (e) => {
          isHovering = true;
          magneticTarget = el;

          // Determine hover type
          if (el.tagName === 'BUTTON' || el.classList.contains('btn')) {
            hoverType = 'button';
            gsap.to(ringRef.current, { scale: 2.2, borderColor: 'rgba(16, 185, 129, 0.8)', duration: 0.3 });
            gsap.to(dotRef.current, { scale: 0, duration: 0.2 });
          } else if (el.tagName === 'A' || el.dataset.hover === 'link') {
            hoverType = 'link';
            gsap.to(ringRef.current, { scale: 1.8, borderColor: 'rgba(52, 211, 153, 0.8)', borderStyle: 'dashed', duration: 0.3 });
            gsap.to(dotRef.current, { scale: 1.4, backgroundColor: '#10b981', duration: 0.2 });
          } else if (el.classList.contains('project-sticky-card') || el.dataset.hover === 'card') {
            hoverType = 'card';
            gsap.to(ringRef.current, { scale: 2.8, borderColor: 'rgba(16, 185, 129, 0.4)', duration: 0.3 });
          } else {
            hoverType = 'text';
            gsap.to(ringRef.current, { scale: 0.5, opacity: 0, duration: 0.2 });
            gsap.to(dotRef.current, { scale: 2.5, duration: 0.2 });
          }
        });

        el.addEventListener('mouseleave', () => {
          isHovering = false;
          magneticTarget = null;
          hoverType = '';

          // Reset styles
          gsap.to(ringRef.current, { scale: 1, borderColor: 'rgba(16, 185, 129, 0.3)', borderStyle: 'solid', opacity: 1, duration: 0.3 });
          gsap.to(dotRef.current, { scale: 1, backgroundColor: '#ffffff', duration: 0.2 });
          
          // Clear any magnetic offset on the element itself
          gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
        });

        // Add magnetic tracking logic on mouse move inside element
        el.addEventListener('mousemove', (e) => {
          if (hoverType === 'button' || hoverType === 'link') {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Pull the element itself slightly towards cursor (magnetic draw)
            const pullX = (e.clientX - centerX) * 0.2;
            const pullY = (e.clientY - centerY) * 0.2;
            gsap.to(el, { x: pullX, y: pullY, duration: 0.2, ease: 'power2.out' });
          }
        });
      });
    };

    // Scan initially and run a check periodically to bind new elements (SPAs)
    scanHoverables();
    const hoverInterval = setInterval(scanHoverables, 1200);

    // --- Resize Handler ---
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // --- Animation & Physics Loop ---
    let animFrameId;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      // 1. Smooth lerp for outer cursor ring
      const ringEase = 0.15;
      if (isHovering && magneticTarget && (hoverType === 'button' || hoverType === 'link')) {
        const rect = magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Magnet snap target centers
        ringPos.x += (centerX - ringPos.x) * ringEase;
        ringPos.y += (centerY - ringPos.y) * ringEase;
        
        // Dot snaps as well with slight offset tracking mouse
        dotPos.x += (centerX + (mouse.x - centerX) * 0.35 - dotPos.x) * 0.25;
        dotPos.y += (centerY + (mouse.y - centerY) * 0.35 - dotPos.y) * 0.25;
      } else {
        // Normal tracking
        ringPos.x += (mouse.x - ringPos.x) * ringEase;
        ringPos.y += (mouse.y - ringPos.y) * ringEase;
        
        dotPos.x += (mouse.x - dotPos.x) * 0.3;
        dotPos.y += (mouse.y - dotPos.y) * 0.3;
      }

      // Update HTML positions
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x - 20}px, ${ringPos.y - 20}px, 0)`;
      }
      if (dotRef.current) {
        // Apply velocity distortion stretch based on cursor speed
        const speedFactor = Math.min(mouseSpeed * 0.015, 0.45);
        if (speedFactor > 0.05 && !isHovering) {
          const dx = mouse.x - lastMouseX;
          const dy = mouse.y - lastMouseY;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          dotRef.current.style.transform = `translate3d(${dotPos.x - 6}px, ${dotPos.y - 6}px, 0) rotate(${angle}deg) scale(${1 + speedFactor}, ${1 - speedFactor})`;
        } else {
          dotRef.current.style.transform = `translate3d(${dotPos.x - 6}px, ${dotPos.y - 6}px, 0)`;
        }
      }

      // 2. Update Three.js particles physics
      const posAttr = particleGeometry.getAttribute('position');
      const colorAttr = particleGeometry.getAttribute('color');
      const sizeAttr = particleGeometry.getAttribute('size');

      let activeIndex = 0;
      particleData.forEach((p, idx) => {
        if (!p.active) return;

        p.age++;
        if (p.age >= p.maxAge) {
          p.active = false;
          return;
        }

        // Apply drift and friction drag physics
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Write positions into Float32 buffer
        positions[activeIndex * 3] = p.x;
        positions[activeIndex * 3 + 1] = p.y;
        positions[activeIndex * 3 + 2] = 0;

        // Fade colors out over time
        const lifeRatio = p.age / p.maxAge;
        const colorAlpha = 1 - lifeRatio;
        colors[activeIndex * 3] = p.color.r * colorAlpha;
        colors[activeIndex * 3 + 1] = p.color.g * colorAlpha;
        colors[activeIndex * 3 + 2] = p.color.b * colorAlpha;

        // Shrink sizes over time
        sizes[activeIndex] = p.size * (1 - lifeRatio * 0.5);

        activeIndex++;
      });

      // Reset coordinates for rest of inactive buffer positions
      for (let i = activeIndex; i < maxParticles; i++) {
        positions[i * 3] = -99999;
        positions[i * 3 + 1] = -99999;
        positions[i * 3 + 2] = -99999;
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0;
        colors[i * 3 + 2] = 0;
        sizes[i] = 0;
      }

      // Flag buffer updates to GPU
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      
      particleGeometry.getAttribute('position').needsUpdate = true;
      particleGeometry.getAttribute('color').needsUpdate = true;
      particleGeometry.getAttribute('size').needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      clearInterval(hoverInterval);
      cancelAnimationFrame(animFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      {/* HTML Cursor elements for crisp graphics & blend inversion */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)] rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* WebGL Particle trail overlay */}
      <div
        ref={mountRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9998] overflow-hidden"
      />
    </>
  );
};

export default CreativeCursor;
