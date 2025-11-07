"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  showChevron?: boolean
}

export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black dark:ring-gray-700 ring-opacity-9 focus:outline-none z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

interface MenuItemProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  isActive?: boolean
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false }: MenuItemProps) {
  return (
    <button
      className={`relative block w-full h-16 text-center group
        ${disabled ? "text-gray-400 dark:text-gray-500 cursor-not-allowed" : "text-gray-600 dark:text-gray-300"}
        ${isActive ? "bg-white/10" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center h-full mt-[5%]">
        {icon && (
          <span className="h-6 w-6 transition-all duration-200 group-hover:[&_svg]:stroke-[2.5]">
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const container = document.querySelector('[data-menu-container="true"]')
      if (container && !container.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isExpanded])

  return (
    <div 
      className="relative w-[64px]" 
      data-expanded={isExpanded}
      data-menu-container="true"
    >
      <div className="relative">
        {/* First item - always visible */}
        <div 
          className="relative w-16 h-16 bg-white/90 dark:bg-gray-800/90 cursor-pointer rounded-full group will-change-transform z-50 shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700"
          onClick={(e) => {
            e.stopPropagation()
            handleToggle()
          }}
        >
          {childrenArray[0]}
        </div>

        {/* Other items */}
        <div className="absolute top-0 left-0">
          {childrenArray.slice(1).map((child, index) => (
            <div 
              key={index} 
              className="absolute top-0 left-0 w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-full will-change-transform shadow-lg backdrop-blur-md border border-gray-200 dark:border-gray-700"
              style={{
                transform: `translateY(${isExpanded ? -(index + 1) * 72 : 0}px)`,
                opacity: isExpanded ? 1 : 0,
                pointerEvents: isExpanded ? 'auto' : 'none',
                zIndex: 40 - index,
                transition: `all 300ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 50}ms`
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}