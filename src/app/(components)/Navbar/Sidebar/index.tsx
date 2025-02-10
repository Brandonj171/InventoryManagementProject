"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import { Archive, BirdIcon, Box, ChartBar, CircleDollarSign, Clipboard, ClipboardList, Cog, Home, HomeIcon, Icon, Layout, LucideIcon, Menu, PhoneIcon, ShipWheelIcon, SlidersHorizontal, User, Warehouse } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = 
          pathname === href|| (pathname ==="/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div className={`cursor-pointer flec items-center ${
        isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
      }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }
      }`}
      >
        <Icon className="w=6 h-6 !text-gray-700  pl-0.5 ml-4" />
        <span 
          className={`${
            isCollapsed ? "hidden": "block"
        } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
  };


const Sidebar = () => {

    const dispatch = useAppDispatch();
      const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
      );

      const toggleSiderbar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
      };

      const sidebarClassNames = `fixed flex flex-col ${
      isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`
  return (
    <div className={sidebarClassNames}>
        {/*TOP LOGO */}
        <div
 className={`flex justify-center items-center ${
  isSidebarCollapsed ? "py-6" : "pt-8 px-8"
}`}
>
  <div>
    
  <img
  src="/logo/logo.png"
  alt="Logo"
  className={`transition-all duration-300 ${
    isSidebarCollapsed ? "w-30 h-35" : "w-50 h-50"
  }`}
/>
</div>
  <h1 className={`${isSidebarCollapsed ? "hidden" : "block"
  } font-extrabold text-2xl`}
  >
  </h1>

  <button
    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
    onClick={toggleSiderbar} 
  >
    <Menu className="w-4 h-4" />
  </button>
</div>


            {/* LINKS */}
    <div className="flex-grow mt-8">
      <SidebarLink 
      href="/dashboard"
      icon ={Home} 
      label="Dashboard" 
      isCollapsed={isSidebarCollapsed}
       />
       <SidebarLink 
      href="/inventory"
      icon ={Warehouse} 
      label="Inventory" 
      isCollapsed={isSidebarCollapsed}
       />
       <SidebarLink 
      href="/products"
      icon ={ClipboardList} 
      label="Products" 
      isCollapsed={isSidebarCollapsed}
       />
       <SidebarLink 
      href="/expenses"
      icon ={CircleDollarSign} 
      label="Expenses" 
      isCollapsed={isSidebarCollapsed}
       />
       <SidebarLink 
      href="/settings"
      icon ={SlidersHorizontal} 
      label="Settings" 
      isCollapsed={isSidebarCollapsed}
       />
      </div>
    
    {/* FOOTER */}
    <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2025 </p>
    </div>
    </div>
  )
}

export default Sidebar;