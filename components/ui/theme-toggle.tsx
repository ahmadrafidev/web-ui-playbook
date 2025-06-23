"use client"

import { memo, useEffect, useState, useRef } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle = memo(function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  if (!mounted) {
    return (
      <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-300 dark:border-gray-600 shadow-sm">
        <div className="flex items-center justify-center p-2 rounded-md w-8 h-8">
          <Monitor size={16} className="text-gray-400" />
        </div>
      </div>
    );
  }

  const themes = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[2];
  const CurrentIcon = currentTheme.icon;

  const handleThemeSelect = (value: string) => {
    setTheme(value);
    setIsExpanded(false);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-300 dark:border-gray-600 shadow-sm transition-all duration-200 ${
        isExpanded ? 'w-auto' : 'w-auto'
      }`}
    >
      {isExpanded ? (
        themes.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => handleThemeSelect(value)}
            onKeyDown={handleKeyDown}
            className={`
              flex items-center justify-center p-2 rounded-md w-8 h-8 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
              ${theme === value 
                ? 'bg-blue-500 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
            aria-label={`Switch to ${label.toLowerCase()} theme`}
            aria-pressed={theme === value}
            title={`${label} theme`}
            type="button"
          >
            <Icon 
              size={16} 
              className="transition-colors"
              aria-hidden="true"
            />
          </button>
        ))
      ) : (
        <button
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className="flex items-center justify-center p-2 rounded-md w-8 h-8 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          aria-label={`Current theme: ${currentTheme.label}. Click to change theme`}
          aria-expanded={isExpanded}
          type="button"
        >
          <CurrentIcon 
            size={16} 
            className="transition-colors"
            aria-hidden="true"
          />
        </button>
      )}
      
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Current theme: {theme}
        {theme === 'system' && `, resolved to ${resolvedTheme}`}
      </div>
    </div>
  );
}); 