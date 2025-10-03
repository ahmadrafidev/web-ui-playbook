"use client"

import { memo, useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

const THEME_OPTIONS = [
  { value: 'light' as const, label: 'Light', icon: Sun },
  { value: 'dark' as const, label: 'Dark', icon: Moon },
  { value: 'system' as const, label: 'System', icon: Monitor },
] as const;

export const ThemeToggle = memo(function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isExpanded, handleClickOutside]);

  const currentTheme = useMemo(() => 
    THEME_OPTIONS.find(t => t.value === theme) ?? THEME_OPTIONS[2], 
    [theme]
  );

  const handleThemeSelect = useCallback((value: string) => {
    setTheme(value);
    setIsExpanded(false);
  }, [setTheme]);

  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsExpanded(false);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!isExpanded) {
        setIsExpanded(true);
      }
    }
  }, [isExpanded]);

  if (!isMounted) {
    return (
      <div className="flex items-center bg-muted/50 rounded-lg p-1 border border-border">
        <div className="flex items-center justify-center p-2 rounded-md w-8 h-8">
          <Monitor size={16} className="text-muted-foreground animate-in fade-in-0 duration-300" />
        </div>
      </div>
    );
  }

  const CurrentIcon = currentTheme.icon;

  return (
    <div 
      ref={containerRef}
      className={`
        relative flex items-center bg-muted/50 rounded-lg p-1 border border-border
        motion-safe:transform-gpu motion-safe:transition-all motion-safe:duration-700 
        motion-safe:ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:bg-muted/70 hover:border-border/80
        ${isExpanded ? 'gap-1 shadow-lg shadow-primary/5' : ''}
      `}
      role="group"
      aria-label="Theme selection"
    >
      {isExpanded ? (
        <div 
          className="flex items-center gap-1 motion-safe:animate-in motion-safe:fade-in-0 
            motion-safe:slide-in-from-left-2 motion-safe:duration-700 
            motion-safe:ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        >
          {THEME_OPTIONS.map(({ value, label, icon: Icon }, index) => {
            const isActive = theme === value;
            return (
              <button
                key={value}
                onClick={() => handleThemeSelect(value)}
                onKeyDown={handleKeyDown}
                className={`
                  group relative flex items-center justify-center p-2 rounded-md w-8 h-8 
                  motion-safe:transform-gpu motion-safe:transition-all motion-safe:duration-700
                  motion-safe:ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1
                  ${isActive 
                    ? 'bg-primary text-primary-foreground scale-105 shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0'
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards'
                }}
                aria-label={`Switch to ${label.toLowerCase()} theme`}
                aria-pressed={isActive}
                title={`${label} theme${isActive ? ' (current)' : ''}`}
                type="button"
              >
                <Icon 
                  size={16} 
                  className={`
                    motion-safe:transition-all motion-safe:duration-700
                    motion-safe:ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    group-hover:scale-110 group-active:scale-90
                    ${isActive ? 'motion-safe:animate-spin-slow' : ''}
                  `}
                  strokeWidth={isActive ? 2.5 : 2}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      ) : (
        <button
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={`
            group flex items-center justify-center p-2 rounded-md w-8 h-8 
            motion-safe:transform-gpu motion-safe:transition-all motion-safe:duration-500
            motion-safe:ease-[cubic-bezier(0.34,1.56,0.64,1)]
            text-muted-foreground hover:text-foreground
            hover:scale-110 hover:rotate-12 active:scale-95 active:rotate-0
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1
          `}
          aria-label={`Current theme: ${currentTheme.label}. Click to change theme`}
          aria-expanded={isExpanded}
          aria-haspopup="true"
          type="button"
        >
          <CurrentIcon 
            size={16} 
            className={`
              motion-safe:transition-all motion-safe:duration-500 
              motion-safe:ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:scale-110 group-active:scale-90
              motion-safe:animate-in motion-safe:fade-in-0 motion-safe:spin-in-90
            `}
            strokeWidth={2}
            aria-hidden="true"
          />
        </button>
      )}
      
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current theme: {theme}
        {theme === 'system' && resolvedTheme && `, resolved to ${resolvedTheme}`}
      </div>
    </div>
  );
}); 