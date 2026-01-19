'use client'

import { useState, useEffect } from 'react'

/**
 * 刷新段子按钮组件（静态导出兼容版本）
 * 职责：提供"换个段子"按钮功能，点击跳转到段子列表页面
 */
export default function RefreshJokeButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleRefresh = () => {
    setIsLoading(true)
    // 静态导出模式：直接刷新页面获取新的随机段子（构建时随机选择的）
    // 或者跳转到段子列表页让用户自己选择
    window.location.href = '/jokes/'
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleRefresh}
        disabled={isLoading}
        className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-kfc-yellow to-yellow-400 px-8 py-3 font-bold text-kfc-red shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        <i className={`fa fa-list text-lg transition-transform duration-300 ${isLoading ? 'animate-spin' : 'group-hover:rotate-180'}`}></i>
        <span>{isLoading ? '跳转中...' : '查看更多'}</span>
        {!isLoading && <span className="text-sm opacity-75">(≧∇≦)</span>}
      </button>
    </div>
  )
}

