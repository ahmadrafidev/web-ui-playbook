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
          <Monitor size={16} className="text-muted-foreground" />
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
                  group relative flex items-center justify-center p-2 rounded-md w-8 h-8 
                  transition-all duration-200 ease-out
                  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1
                  ${isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95'
                  }
                `}
                aria-label={`Switch to ${label.toLowerCase()} theme`}
                aria-pressed={isActive}
                title={`${label} theme${isActive ? ' (current)' : ''}`}
                type="button"
              >
                <Icon 
                  size={16} 
                  className="transition-all duration-200 group-hover:scale-110"
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
            text-muted-foreground hover:text-foreground hover:scale-105 
            active:scale-95 transition-all duration-200 ease-out
            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1
          `}
          aria-label={`Current theme: ${currentTheme.label}. Click to change theme`}
          aria-expanded={isExpanded}
          aria-haspopup="true"
          type="button"
        >
          <CurrentIcon 
            size={16} 
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