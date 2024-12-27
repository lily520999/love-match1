import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Love Match
        </h1>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <Link href="/match" className="block">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg">
                开始匹配
              </button>
            </Link>
            
            <Link href="/messages" className="block">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg">
                查看消息
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}