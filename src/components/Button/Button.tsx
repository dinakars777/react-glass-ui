import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'outline', size = 'md', fullWidth = false, children, ...props }, ref) => {

        const classes = [
            'glass-btn',
            `glass-btn-${variant}`,
            `glass-btn-${size}`,
            fullWidth ? 'glass-btn-full' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
