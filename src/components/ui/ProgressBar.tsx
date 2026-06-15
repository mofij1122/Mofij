'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  label?: string;
  showValue?: boolean;
  variant?: 'default' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ProgressBar({
  value,
  label,
  showValue = true,
  variant = 'gradient',
  size = 'md',
  className,
}: ProgressBarProps) {
  const sizes = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={cn('space-y-2', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className="text-sm font-medium text-foreground">{label}</span>
          )}
          {showValue && <span className="text-sm text-muted-foreground">{value}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-muted rounded-full overflow-hidden', sizes[size])}>
        <motion.div
          className={cn(
            'h-full rounded-full',
            variant === 'gradient'
              ? 'bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500'
              : 'bg-emerald-600'
          )}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}