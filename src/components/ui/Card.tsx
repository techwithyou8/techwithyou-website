import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, gradient = false, onClick }: CardProps) {
  const baseStyles = 'rounded-2xl p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : '';
  const gradientStyles = gradient 
    ? 'bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20' 
    : 'bg-white dark:bg-gray-800';

  const Component = hover ? motion.div : 'div';

  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}
      onClick={onClick}
      {...(hover ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      } : {})}
    >
      {children}
    </Component>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${className}`}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </div>
  );
}
