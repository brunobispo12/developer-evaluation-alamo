'use client'
import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import SearchBar from '@/components/ui/search-bar'
import ProceduresList from './components/procedure-list'
import AddProcedureSheet from './components/add-procedure'

export default function Rotinas() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sheetOpen, setSheetOpen] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  const handleOpenSheet = () => {
    setSheetOpen(true)
  }

  return (
    <section className="flex flex-col h-full p-6">
      <div className="max-w-screen-xl mx-auto w-full h-full flex flex-col">
        <div className="flex justify-between items-center mb-8 flex-shrink-0">
          <h3 className="text-2xl font-medium text-gray-800">
            Gestão de rotinas de laboratório
          </h3>
          <Button className="h-8" onClick={handleOpenSheet}>
            <Plus className="size-5" />
            Adicionar Rotina
          </Button>
        </div>

        <div className="mb-6 flex-shrink-0">
          <SearchBar
            onSearch={handleSearch}
            onClear={handleClearSearch}
            currentQuery={searchQuery}
            placeholder='Buscar procedimentos, reagentes, observações...'
          />
        </div>

        <div className="flex-1 min-h-0">
          <ProceduresList searchQuery={searchQuery} />
        </div>
      </div>

      {/* Sheet renderizado via portal no body */}
      <AddProcedureSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </section>
  )
}