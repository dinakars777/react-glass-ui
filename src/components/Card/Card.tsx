import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', glow = false, children, ...props }, ref) => {

        const classes = [
            'glass-card',
            glow ? 'glass-card-glow' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <div ref={ref} className={classes} {...props}>
                {children}
            </div>
        );
    }
);
Card.displayName = 'Card';
