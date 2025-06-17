'use client'
import React, { useState, useMemo, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProcedures } from '@/api/fetch-procedures'
import type { Procedure } from '@/app/types/procedure'

interface ProceduresListProps {
  searchQuery?: string
}

export default function ProceduresList({ searchQuery = '' }: ProceduresListProps) {
  const { data, isLoading, isError } = useQuery<Procedure[], Error>({
    queryKey: ['procedures'],
    queryFn: fetchProcedures,
  })

  const [page, setPage] = useState(0)
  const pageSize = 5

  const filteredData = useMemo(() => {
    if (!data || !searchQuery.trim()) return data || []

    const query = searchQuery.toLowerCase().trim()

    return data.filter(procedure => {
      if (procedure.title.toLowerCase().includes(query)) return true

      if (procedure.time.toLowerCase().includes(query)) return true

      const stepsMatch = procedure.steps.some(step =>
        step.item.toLowerCase().includes(query) ||
        step.amount.toLowerCase().includes(query)
      )
      if (stepsMatch) return true

      const observationsMatch = procedure.observations.some(obs =>
        obs.toLowerCase().includes(query)
      )
      if (observationsMatch) return true

      const metricsMatch = Object.values(procedure.metrics).some(metric =>
        metric.toLowerCase().includes(query)
      )
      if (metricsMatch) return true

      return false
    })
  }, [data, searchQuery])

  useEffect(() => {
    setPage(0)
  }, [searchQuery])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p>Carregando procedimentos...</p>
        </div>
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-red-500">
          <p>Erro ao carregar dados</p>
          <p className="text-sm mt-1">Tente novamente mais tarde</p>
        </div>
      </div>
    )
  }

  const totalPages = Math.ceil(filteredData.length / pageSize)
  const start = page * pageSize
  const paginated = filteredData.slice(start, start + pageSize)

  const handlePrev = () => setPage(old => Math.max(old - 1, 0))
  const handleNext = () => setPage(old => Math.min(old + 1, totalPages - 1))

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text

    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 rounded">
          {part}
        </mark>
      ) : part
    )
  }

  return (
    <div className="h-full flex flex-col border-t py-5">
      {searchQuery && (
        <div className="flex-shrink-0 mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200 ">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-800 ">
              {filteredData.length > 0 ? (
                <>
                  Encontrados <strong>{filteredData.length}</strong> resultado(s) para{' '}
                  <strong>"{searchQuery}"</strong>
                </>
              ) : (
                <>
                  Nenhum resultado encontrado para <strong>"{searchQuery}"</strong>
                </>
              )}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        {filteredData.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              {searchQuery ? (
                <>
                  <p className="text-lg mb-2">🔍 Nenhum resultado encontrado</p>
                  <p>Tente ajustar sua busca ou usar outros termos</p>
                </>
              ) : (
                <>
                  <p className="text-lg mb-2">📋 Nenhum procedimento encontrado</p>
                  <p>Adicione novos procedimentos para começar</p>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="p-2">
            <div className="space-y-4">
              {paginated.map((proc, idx) => (
                <div
                  key={`${proc.time}-${proc.title}-${idx}`}
                  className={`p-4 h-[12.75rem] rounded-2xl  flex justify-between items-start transition-all duration-200 ${idx % 2 === 1
                    ? 'bg-gray-50  border-gray-200 '
                    : 'bg-white  border-gray-100 '
                    } ${searchQuery ? 'ring-1 ring-blue-200 ' : ''}`}
                >
                  <div className="flex-1">
                    <div className="font-medium text-gray-700  mb-2">
                      {highlightText(proc.time, searchQuery)} — {highlightText(proc.title, searchQuery)}
                    </div>

                    <div className='pl-6'>
                      <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-400 text-sm">
                        {proc.steps.map((step, stepIdx) => (
                          <li key={`${step.item}-${stepIdx}`} className="flex">
                            <span>{highlightText(step.item, searchQuery)} </span>
                            <span className='mx-2'> - </span>
                            <span className="">
                              {highlightText(step.amount, searchQuery)}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {proc.observations?.length > 0 && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          <span className="">Observações: </span>
                          {highlightText(proc.observations.join(', '), searchQuery)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="ml-6 flex-shrink-0 text-right text-sm space-y-1 min-w-[120px] h-full pb-10">
                    <div className="flex flex-col items-center justify-around h-full">
                      <div className="p-1 flex">
                        <div className="">CHO:</div>
                        <div className=" ">
                          {highlightText(proc.metrics.CHO, searchQuery)}
                        </div>
                      </div>
                      <div className="p-1 flex">
                        <div className="">PTN:</div>
                        <div className=" ">
                          {highlightText(proc.metrics.PTN, searchQuery)}
                        </div>
                      </div>
                      <div className="p-1 flex">
                        <div className="">LIP:</div>
                        <div className=" ">
                          {highlightText(proc.metrics.LIP, searchQuery)}
                        </div>
                      </div>
                      <div className="p-1 flex">
                        <div className=" text-primary cursor-pointer hover:underline">
                          {highlightText(proc.metrics.absorbance, searchQuery)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {filteredData.length > 0 && totalPages > 1 && (
        <div className="flex-shrink-0 border-t bg-white p-4 mt-5">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600 ">
              Mostrando {start + 1}-{Math.min(start + pageSize, filteredData.length)} de {filteredData.length} resultados
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className="px-3 py-1 rounded-md bg-gray-200  disabled:opacity-50 hover:bg-gray-300  transition-colors disabled:cursor-not-allowed"
              >
                Anterior
              </button>

              <div className="flex space-x-1">
                {Array.from({ length: Math.min(totalPages, 5) }).map((_, idx) => {
                  let pageNum = idx;
                  if (totalPages > 5) {
                    if (page < 3) pageNum = idx;
                    else if (page > totalPages - 3) pageNum = totalPages - 5 + idx;
                    else pageNum = page - 2 + idx;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-3 py-1 rounded-md transition-colors ${pageNum === page
                        ? 'bg-primary text-white'
                        : 'bg-gray-100  hover:bg-gray-200'
                        }`}
                    >
                      {pageNum + 1}
                    </button>
                  )
                })}
              </div>

              <button
                onClick={handleNext}
                disabled={page >= totalPages - 1}
                className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50 hover:bg-gray-300 transition-colors disabled:cursor-not-allowed"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}