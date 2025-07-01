'use client'

import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import PaymentProcessor from './components/PaymentProcessor'
import TransactionHistory from './components/TransactionHistory'
import PaymentMethods from './components/PaymentMethods'
import Integration from './components/Integration'
import Settings from './components/Settings'
import Documentation from './components/Documentation'

type ActiveView = 'dashboard' | 'payment' | 'transactions' | 'methods' | 'integration' | 'analytics' | 'settings' | 'docs'

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'payment':
        return <PaymentProcessor />
      case 'transactions':
        return <TransactionHistory />
      case 'methods':
        return <PaymentMethods />
      case 'integration':
        return <Integration />

      case 'settings':
        return <Settings />
      case 'docs':
        return <Documentation />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="flex">
        <Sidebar 
          activeView={activeView}
          onViewChange={setActiveView}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 lg:ml-64 pt-16">
          <div className="p-4 lg:p-8">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </div>
  )
}