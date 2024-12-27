import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './context/AuthContext'

export const metadata: Metadata = {
  title: 'Love Match',
  description: '找到你的理想对象',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <AuthProvider>
          <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-pink-500">Love Match</h1>
                <button className="text-gray-600 hover:text-pink-500">
                  登录/注册
                </button>
              </div>
            </div>
          </nav>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
