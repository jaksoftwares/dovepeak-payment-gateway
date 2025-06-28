'use client'

import { Menu, CreditCard, Bell, User, Shield } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
  sidebarOpen: boolean
}

export default function Header({ onMenuClick, sidebarOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-lg">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Dovepeak Payment Gateway</h1>
              <p className="text-sm text-gray-500">Secure Payment Processing</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">SSL Secured</span>
          </div>
          
          <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900">Payment Admin</p>
              <p className="text-xs text-gray-500">admin@dovepeakpay.com</p>
            </div>
            <div className="bg-primary-100 p-2 rounded-full">
              <User className="h-5 w-5 text-primary-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}