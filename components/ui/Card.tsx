import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    onClick?: () => void;
}

export function Card({ children, className = '', hover = true, onClick }: CardProps) {
    const hoverEffect = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
    const clickable = onClick ? 'cursor-pointer' : '';

    return (
        <div
            className={`
        bg-white rounded-xl border border-neutral-200 p-6 
        transition-all duration-200
        ${hoverEffect} ${clickable} ${className}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

interface StatCardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    subtitle?: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    color?: 'blue' | 'purple' | 'green' | 'red';
}

export function StatCard({ title, value, icon, subtitle, trend, trendValue, color = 'blue' }: StatCardProps) {
    const colors = {
        blue: 'from-blue-500 to-blue-600',
        purple: 'from-purple-500 to-purple-600',
        green: 'from-green-500 to-green-600',
        red: 'from-red-500 to-red-600',
    };

    const trendColors = {
        up: 'text-green-600',
        down: 'text-red-600',
        neutral: 'text-neutral-600',
    };

    const trendIcons = {
        up: '↗',
        down: '↘',
        neutral: '→',
    };

    return (
        <Card className="relative overflow-hidden">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm text-neutral-600 font-medium mb-1">{title}</p>
                    <p className="text-3xl font-bold text-neutral-900 mb-1">{value}</p>
                    {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
                    {trend && trendValue && (
                        <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${trendColors[trend]}`}>
                            <span>{trendIcons[trend]}</span>
                            <span>{trendValue}</span>
                        </div>
                    )}
                </div>
                {icon && (
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${colors[color]} text-white shadow-md`}>
                        {icon}
                    </div>
                )}
            </div>
        </Card>
    );
}
