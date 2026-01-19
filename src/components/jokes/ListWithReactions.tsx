'use client'

import { IKfcItem } from '@/types'
import JokeCard from './Card'

interface ListWithReactionsProps {
  items: IKfcItem[]
}

/**
 * 段子列表（带批量反应数据注入）
 * 职责：批量获取所有段子的互动数据，并注入到各个卡片
 */
export default function ListWithReactions({ items }: ListWithReactionsProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => {
        return (
          <JokeCard 
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  )
}

