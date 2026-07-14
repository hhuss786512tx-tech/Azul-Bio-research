import React, { useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, className = '', delay = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const delayClass = delay ? `delay-${delay}` : '';

    return (
        <div ref={ref} className={`reveal ${className} ${delayClass}`}>
            {children}
        </div>
    );
};
