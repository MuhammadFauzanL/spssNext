import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: React.ReactNode;
}

export function Input({
    label,
    error,
    helperText,
    icon,
    className = '',
    ...props
}: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                        {icon}
                    </div>
                )}
                <input
                    className={`
            w-full px-4 py-2.5 rounded-lg border 
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-blue-500'}
            focus:outline-none focus:ring-2 focus:border-transparent
            transition-all duration-200
            disabled:bg-neutral-100 disabled:cursor-not-allowed
            ${className}
          `}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
            )}
        </div>
    );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export function TextArea({
    label,
    error,
    helperText,
    className = '',
    ...props
}: TextAreaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {label}
                </label>
            )}
            <textarea
                className={`
          w-full px-4 py-2.5 rounded-lg border 
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300 focus:ring-blue-500'}
          focus:outline-none focus:ring-2 focus:border-transparent
          transition-all duration-200
          disabled:bg-neutral-100 disabled:cursor-not-allowed
          resize-none
          ${className}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
            )}
        </div>
    );
}
