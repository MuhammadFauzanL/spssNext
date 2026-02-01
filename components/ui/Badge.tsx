import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({ children, variant = 'neutral', size = 'md', className = '' }: BadgeProps) {
    const variants = {
        primary: 'bg-blue-100 text-blue-700 border-blue-200',
        success: 'bg-green-100 text-green-700 border-green-200',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        danger: 'bg-red-100 text-red-700 border-red-200',
        neutral: 'bg-neutral-100 text-neutral-700 border-neutral-200',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
    };

    return (
        <span className={`
      inline-flex items-center font-medium rounded-full border
      ${variants[variant]} ${sizes[size]} ${className}
    `}>
            {children}
        </span>
    );
}
