import Image from 'next/image'
import JokeDetail from '@/components/jokes/Detail'
import { getAllKfcItems, getRandomKfcItem } from '@/lib/server-utils'
import { redirect } from 'next/navigation'

interface PageProps {
  searchParams: {
    joke?: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  // 如果没有提供 joke 参数，获取随机段子并重定向
  if (!searchParams.joke) {
    const randomJoke = await getRandomKfcItem()
    redirect(`/?joke=${randomJoke.id}`)
  }

  // 验证 jokeId 是否存在
  const allJokes = await getAllKfcItems()
  const jokeExists = allJokes.some((item) => item.id === searchParams.joke)

  // 如果 joke ID 不存在，获取随机段子并重定向
  if (!jokeExists) {
    const randomJoke = await getRandomKfcItem()
    redirect(`/?joke=${randomJoke.id}`)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* 疯狂星期四海报风格 Hero */}
      <div className="relative mb-16 text-center md:mb-24">
        <div className="absolute -top-10 left-0 -rotate-12 border-2 border-black bg-white px-4 py-1 text-sm font-black uppercase shadow-neo-sm md:text-base">
          Every Thursday
        </div>
        <div className="absolute -right-5 top-0 rotate-12 border-2 border-black bg-kfc-yellow px-4 py-1 text-sm font-black uppercase shadow-neo-sm md:text-base">
          V Me 50
        </div>
        
        <h1 className="mb-6 text-6xl font-black italic tracking-tighter text-black md:text-8xl lg:text-9xl">
          疯狂<span className="text-kfc-red underline decoration-black decoration-8 underline-offset-8">星期四</span>
        </h1>
        
        <div className="mx-auto max-w-3xl border-4 border-black bg-white p-4 shadow-neo">
          <p className="text-lg font-black uppercase leading-tight md:text-2xl">
            Copy. Paste. Get v50. <br />
            在这里，炸鸡是配角，段子才是灵魂。
          </p>
        </div>
      </div>

      {/* 今日主打段子 - 伪新闻门户风 */}
      <div className="mb-20">
        <div className="mb-6 flex items-center gap-4">
          <div className="bg-black px-4 py-1 text-lg font-black uppercase italic text-white shadow-neo-sm">
            Top Headline / 头条
          </div>
          <div className="h-1 flex-1 bg-black"></div>
        </div>
        <JokeDetail jokeId={searchParams.joke} />
      </div>

      {/* 功能导航 - 模块化网格 */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="group border-3 border-black bg-white p-6 shadow-neo transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-black bg-kfc-red text-white shadow-neo-sm">
            <i className="fa fa-list text-2xl"></i>
          </div>
          <h3 className="mb-2 text-2xl font-black uppercase italic">文案仓库</h3>
          <p className="mb-6 font-bold text-gray-600">历年疯四文案大赏，总有一条能骗到v50</p>
          <a
            href="/jokes"
            className="inline-block border-2 border-black bg-black px-6 py-2 text-lg font-black uppercase italic text-white shadow-neo-sm transition-all hover:bg-kfc-red"
          >
            Enter Gallery
          </a>
        </div>

        <div className="group border-3 border-black bg-white p-6 shadow-neo transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-black bg-kfc-yellow text-black shadow-neo-sm">
            <i className="fa fa-history text-2xl"></i>
          </div>
          <h3 className="mb-2 text-2xl font-black uppercase italic">历史记录</h3>
          <p className="mb-6 font-bold text-gray-600">查看往期精彩段子</p>
          <a
            href="/jokes"
            className="inline-block border-2 border-black bg-black px-6 py-2 text-lg font-black uppercase italic text-white shadow-neo-sm transition-all hover:bg-kfc-yellow hover:text-black"
          >
            View History
          </a>
        </div>
      </div>


    </div>
  )
}
