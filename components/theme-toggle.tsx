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
      <div className="flex items-center bg-background/80 backdrop-blur-sm rounded-xl p-1.5 border border-border/60 shadow-lg shadow-black/5">
        <div className="flex items-center justify-center p-2.5 rounded-lg w-9 h-9">
          <Monitor size={18} className="text-muted-foreground/60" />
        </div>
      </div>
    );
  }

  const CurrentIcon = currentTheme.icon;

  return (
    <div 
      ref={containerRef}
      className={`
        relative flex items-center bg-background/80 backdrop-blur-sm rounded-xl p-1.5 
        border border-border/60 shadow-lg shadow-black/5 
        transition-all duration-300 ease-out
        ${isExpanded ? 'gap-1' : ''}
      `}
      role="group"
      aria-label="Theme selection"
    >
      {isExpanded ? (
        <div className="flex items-center gap-1 animate-in fade-in-0 slide-in-from-right-2 duration-200">
          {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
            const isActive = theme === value;
            return (
              <button
                key={value}
                onClick={() => handleThemeSelect(value)}
                onKeyDown={handleKeyDown}
                className={`
                  group relative flex items-center justify-center p-2.5 rounded-lg w-9 h-9 
                  transition-all duration-200 ease-out
                  focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/80 hover:scale-105 active:scale-95'
                  }
                `}
                aria-label={`Switch to ${label.toLowerCase()} theme`}
                aria-pressed={isActive}
                title={`${label} theme${isActive ? ' (current)' : ''}`}
                type="button"
              >
                <Icon 
                  size={18} 
                  className="transition-all duration-200 group-hover:scale-110"
                  strokeWidth={isActive ? 2.5 : 2}
                  aria-hidden="true"
                />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full animate-in fade-in-0 scale-in-0 duration-200" />
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <button
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={`
            group flex items-center justify-center p-2.5 rounded-lg w-9 h-9 
            text-muted-foreground hover:text-foreground hover:bg-muted/80 hover:scale-105 
            active:scale-95 transition-all duration-200 ease-out
            focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background
          `}
          aria-label={`Current theme: ${currentTheme.label}. Click to change theme`}
          aria-expanded={isExpanded}
          aria-haspopup="true"
          type="button"
        >
          <CurrentIcon 
            size={18} 
            className="transition-all duration-200 group-hover:scale-110"
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