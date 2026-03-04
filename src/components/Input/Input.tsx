import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', error = false, ...props }, ref) => {

        const classes = [
            'glass-input',
            error ? 'glass-input-error' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <input ref={ref} className={classes} {...props} />
        );
    }
);
Input.displayName = 'Input';
