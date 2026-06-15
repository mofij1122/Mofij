'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowingOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'emerald' | 'teal' | 'cyan' | 'blue';
  position?: string;
  delay?: number;
  className?: string;
}

export default function GlowingOrb({
  size = 'md',
  color = 'emerald',
  position = '',
  delay = 0,
  className,
}: GlowingOrbProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]',
  };

  const colors = {
    emerald: 'bg-emerald-500/30',
    teal: 'bg-teal-500/30',
    cyan: 'bg-cyan-500/30',
    blue: 'bg-blue-500/30',
  };

  return (
    <motion.div
      className={cn(
        'absolute rounded-full blur-3xl',
        sizes[size],
        colors[color],
        position,
        className
      )}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}