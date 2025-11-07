import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./dropdown-menu"
import { MenuContainer, MenuItem } from "./fluid-menu"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  subItems?: { name: string; url: string }[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  isScrolled?: boolean
  logo?: React.ReactNode
  galleryButton?: React.ReactNode
}

export function TubelightNav({ items, className, isScrolled, logo, galleryButton }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-300",
        className
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo section */}
        {logo}

        {/* Navigation items for desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-3 bg-background/5 backdrop-blur-lg py-1 px-1 rounded-full">
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              if (item.subItems) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-colors",
                          isScrolled ? "text-gray-800 hover:text-[#4a1403]" : "text-white hover:text-mio-yellow",
                          isActive && (isScrolled ? "text-[#4a1403]" : "text-white")
                        )}
                      >
                        {item.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-md border border-black/5 shadow-xl rounded-xl overflow-hidden">
                      {item.subItems.map((subItem) => (
                        <DropdownMenuItem key={subItem.name}>
                          <Link to={subItem.url} className="w-full" onClick={() => setActiveTab(item.name)}>
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-medium px-6 py-2 rounded-full transition-colors",
                    isScrolled ? "text-gray-800 hover:text-[#4a1403]" : "text-white hover:text-mio-yellow",
                    isActive && (isScrolled ? "text-[#4a1403]" : "text-white")
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={18} strokeWidth={2.5} />
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full rounded-full -z-10"
                      style={{
                        background: isScrolled ? "rgba(74, 20, 3, 0.1)" : "rgba(255, 255, 255, 0.1)"
                      }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                           style={{
                             background: isScrolled ? "#4a1403" : "#fff"
                           }}>
                        <div className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2" 
                             style={{
                               background: isScrolled ? "rgba(74, 20, 3, 0.2)" : "rgba(255, 255, 255, 0.2)"
                             }} />
                        <div className="absolute w-8 h-6 rounded-full blur-md -top-1"
                             style={{
                               background: isScrolled ? "rgba(74, 20, 3, 0.2)" : "rgba(255, 255, 255, 0.2)"
                             }} />
                        <div className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2"
                             style={{
                               background: isScrolled ? "rgba(74, 20, 3, 0.2)" : "rgba(255, 255, 255, 0.2)"
                             }} />
                      </div>
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </div>
          {galleryButton}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 border backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-mio-orange/50",
              isScrolled 
                ? "bg-white/80 border-black/10 text-mio-darkred shadow-sm" 
                : "bg-white/15 border-white/20 text-white",
              isMobileMenuOpen ? "rotate-0" : ""
            )}
          >
            <span className="sr-only">Menu</span>
            <span className={cn(
              "block absolute h-0.5 w-5 transform transition duration-300 ease-in-out bg-current rounded",
              isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            )}></span>
            <span className={cn(
              "block absolute h-0.5 w-5 transform transition duration-300 ease-in-out bg-current rounded",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "block absolute h-0.5 w-5 transform transition duration-300 ease-in-out bg-current rounded",
              isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            )}></span>
          </button>
        </div>

        {/* Mobile drawer menu */}
        <div className={cn("md:hidden fixed inset-0 z-[100]", isMobileMenuOpen ? "" : "pointer-events-none")}>
          <div 
            className={cn(
              "absolute inset-0 bg-black/40 transition-opacity duration-300 will-change-transform",
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className={cn(
            "absolute top-0 right-0 h-[100dvh] w-[88vw] max-w-sm bg-white/95 backdrop-blur-md border-l border-black/5 shadow-2xl transform transition-transform duration-300 will-change-transform",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="h-full flex flex-col" onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>
              {/* Drawer header */}
              <div className="px-5 py-4 border-b border-black/5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-10">
                <span className="font-semibold text-gray-900">Menu</span>
                <button 
                  aria-label="Close menu" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 transition flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Drawer body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {items.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <div className="pt-3">
                        <p className="font-medium text-gray-800 mb-2">{item.name}</p>
                        <div className="pl-3 flex flex-col divide-y divide-black/5 rounded-lg overflow-hidden">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.url}
                              className="py-3 text-base text-gray-700 hover:text-[#4a1403]"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setActiveTab(item.name)
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.url}
                        className="font-medium text-gray-800 hover:text-[#4a1403] py-3 text-base flex items-center gap-2"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setActiveTab(item.name)
                        }}
                      >
                        <item.icon size={18} />
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="p-4 border-t border-black/5">
                {galleryButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}