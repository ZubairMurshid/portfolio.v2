'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Skill } from '@/lib/types';

interface RadarChartProps {
  skills: Skill[];
}

export default function RadarChart({ skills }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Keep aspect ratio square, but cap max size
        const size = Math.min(width, 500);
        setDimensions({ width: size, height: size });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set actual canvas size to match display size for sharpness
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    // Adjust radius to fit labels
    const radius = Math.min(centerX, centerY) * 0.65; 

    const angleStep = (Math.PI * 2) / skills.length;

    const gridColor = theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(30, 58, 138, 0.15)';
    const textColor = theme === 'dark' ? '#f8fafc' : '#0f172a';
    const fillColor = theme === 'dark' ? 'rgba(14, 165, 233, 0.3)' : 'rgba(30, 58, 138, 0.2)';
    const strokeColor = theme === 'dark' ? '#0EA5E9' : '#1e3a8a';

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Draw Grid
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      const levelRadius = (radius / 5) * i;
      for (let j = 0; j <= skills.length; j++) {
        const angle = angleStep * j - Math.PI / 2;
        const x = centerX + levelRadius * Math.cos(angle);
        const y = centerY + levelRadius * Math.sin(angle);
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw Axes
    for (let i = 0; i < skills.length; i++) {
      const angle = angleStep * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle)
      );
      ctx.strokeStyle = gridColor;
      ctx.stroke();
    }

    // Draw Data Area
    ctx.beginPath();
    for (let i = 0; i <= skills.length; i++) {
      const skill = skills[i % skills.length];
      const angle = angleStep * i - Math.PI / 2;
      const skillRadius = (radius * skill.value) / 100;
      const x = centerX + skillRadius * Math.cos(angle);
      const y = centerY + skillRadius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Points
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const angle = angleStep * i - Math.PI / 2;
      const skillRadius = (radius * skill.value) / 100;
      const x = centerX + skillRadius * Math.cos(angle);
      const y = centerY + skillRadius * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = strokeColor;
      ctx.fill();
    }

    // Draw Labels
    ctx.fillStyle = textColor;
    ctx.font = 'bold 12px "Space Grotesk"';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const angle = angleStep * i - Math.PI / 2;
      const labelRadius = radius + 25;
      const x = centerX + labelRadius * Math.cos(angle);
      const y = centerY + labelRadius * Math.sin(angle);
      ctx.fillText(skill.name, x, y);
    }

  }, [theme, skills, dimensions]);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center">
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  );
}
