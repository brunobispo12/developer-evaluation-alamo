'use client'
import React, { useState, useEffect, ReactNode } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Filter, X } from 'lucide-react'

interface SearchBarProps {
  onSearch?: (query: string) => void
  onClear?: () => void
  currentQuery?: string
  filterComponent?: ReactNode
  placeholder?: string
  realTimeSearch?: boolean // Busca em tempo real
}

export default function SearchBar({
  onSearch,
  onClear,
  currentQuery = '',
  filterComponent,
  placeholder = "Pesquisar...",
  realTimeSearch = true
}: SearchBarProps) {
  const [query, setQuery] = useState(currentQuery)
  const [openFilter, setOpenFilter] = useState(false)

  useEffect(() => {
    setQuery(currentQuery)
  }, [currentQuery])

  useEffect(() => {
    if (!realTimeSearch) return

    const timeoutId = setTimeout(() => {
      if (onSearch) onSearch(query)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, onSearch, realTimeSearch])

  const handleSearch = () => {
    if (onSearch) onSearch(query)
  }

  const handleClear = () => {
    setQuery('')
    if (onClear) onClear()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
    if (e.key === 'Escape') {
      handleClear()
    }
  }

  return (
    <div className="flex gap-4 items-center">
      <div className="relative flex-1 max-w-2xl">
        <Input
          className="w-full pl-10 pr-10"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <Search
          className="absolute left-3 top-1/2 w-4 h-4 text-gray-500 transform -translate-y-1/2"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {!realTimeSearch && (
        <Button className="w-24" onClick={handleSearch}>
          Buscar
        </Button>
      )}
      
      {query && (
        <div className="text-sm text-gray-500 whitespace-nowrap">
          Buscando por: <span className="font-medium">"{query}"</span>
        </div>
      )}

      <div className="relative">
        <Button variant="ghost" onClick={() => setOpenFilter(prev => !prev)}>
          <Filter className="w-5 h-5" />
          Filtros
        </Button>
        {openFilter && filterComponent && (
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-700 border rounded shadow p-4 w-64 z-10">
            {filterComponent}
          </div>
        )}
      </div>
    </div>
  )
}