'use client'

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Plus, Minus, X, Clock, FileText, BarChart3, FlaskConical } from 'lucide-react'
import { toast } from 'sonner'
import type { Metrics, Procedure, Step } from '@/app/types/procedure'

export default function AddProcedureSheet({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [procedure, setProcedure] = useState<Procedure>({
    time: '',
    title: '',
    steps: [{ item: '', amount: '' }],
    observations: [''],
    metrics: { CHO: '', PTN: '', LIP: '', absorbance: '' },
  })

  const handleAddStep = () =>
    setProcedure(p => ({ ...p, steps: [...p.steps, { item: '', amount: '' }] }))

  const handleRemoveStep = (idx: number) =>
    setProcedure(p => ({
      ...p,
      steps: p.steps.length > 1 ? p.steps.filter((_, i) => i !== idx) : p.steps,
    }))

  const handleStepChange = (idx: number, field: keyof Step, value: string) =>
    setProcedure(p => ({
      ...p,
      steps: p.steps.map((s, i) => (i === idx ? { ...s, [field]: value } : s)),
    }))

  const handleAddObservation = () =>
    setProcedure(p => ({ ...p, observations: [...p.observations, ''] }))

  const handleRemoveObservation = (idx: number) =>
    setProcedure(p => ({
      ...p,
      observations:
        p.observations.length > 1 ? p.observations.filter((_, i) => i !== idx) : p.observations,
    }))

  const handleObservationChange = (idx: number, value: string) =>
    setProcedure(p => ({
      ...p,
      observations: p.observations.map((o, i) => (i === idx ? value : o)),
    }))

  const handleMetricChange = (field: keyof Metrics, value: string) =>
    setProcedure(p => ({ ...p, metrics: { ...p.metrics, [field]: value } }))

  const resetForm = () =>
    setProcedure({
      time: '',
      title: '',
      steps: [{ item: '', amount: '' }],
      observations: [''],
      metrics: { CHO: '', PTN: '', LIP: '', absorbance: '' },
    })

  const handleSubmit = () => {
    if (!procedure.title.trim()) return toast.error('Por favor, insira um título')
    if (!procedure.time.trim()) return toast.error('Por favor, insira o tempo')

    toast.success('Procedimento adicionado com sucesso!')
    resetForm()
    onOpenChange(false)
  }

  /* ---------- JSX ---------- */
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[600px] sm:max-w-[600px] overflow-y-auto">
        {/* Cabeçalho */}
        <SheetHeader className="space-y-3 pb-4 border-b">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-blue-600" />
            <div>
              <SheetTitle className="text-lg font-medium text-gray-900">
                Nova Rotina de Laboratório
              </SheetTitle>
              <SheetDescription className="text-gray-600 text-sm">
                Configure uma nova rotina com todos os detalhes necessários
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="space-y-6 p-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <h3 className="text-sm font-medium text-gray-900">Informações Básicas</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="title" className="text-xs font-medium text-gray-700">
                  Título do Procedimento *
                </Label>
                <Input
                  id="title"
                  value={procedure.title}
                  onChange={e => setProcedure(p => ({ ...p, title: e.target.value }))}
                  placeholder="Ex: Análise de Proteínas"
                  className="h-8 text-sm"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="time" className="text-xs font-medium text-gray-700 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Tempo de Execução *
                </Label>
                <Input
                  id="time"
                  value={procedure.time}
                  onChange={e => setProcedure(p => ({ ...p, time: e.target.value }))}
                  placeholder="Ex: 30 minutos"
                  className="h-8 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <h3 className="text-sm font-medium text-gray-900">Passos do Procedimento</h3>
                <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                  {procedure.steps.length} {procedure.steps.length === 1 ? 'passo' : 'passos'}
                </Badge>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddStep}
                className="h-7 px-2 text-xs gap-1 border-green-200 text-green-700 hover:bg-green-50"
              >
                <Plus className="h-3 w-3" />
                Adicionar Passo
              </Button>
            </div>

            <div className="space-y-2">
              {procedure.steps.map((step, idx) => (
                <div key={idx} className="flex gap-2 items-end p-2 bg-gray-50 rounded border">
                  <div className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white rounded-full text-xs font-medium mt-3">
                    {idx + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <Label className="text-xs font-medium text-gray-700">Descrição do Passo</Label>
                    <Input
                      value={step.item}
                      onChange={e => handleStepChange(idx, 'item', e.target.value)}
                      placeholder="Descreva o que deve ser feito..."
                      className="h-7 text-xs"
                    />
                  </div>
                  <div className="w-20 space-y-1">
                    <Label className="text-xs font-medium text-gray-700">Quantidade</Label>
                    <Input
                      value={step.amount}
                      onChange={e => handleStepChange(idx, 'amount', e.target.value)}
                      placeholder="Ex: 5ml"
                      className="h-7 text-xs"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveStep(idx)}
                    disabled={procedure.steps.length === 1}
                    className="h-7 w-7 p-0 text-red-500 hover:bg-red-50 mt-3"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <h3 className="text-sm font-medium text-gray-900">Observações Importantes</h3>
                <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                  {procedure.observations.length}
                </Badge>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddObservation}
                className="h-7 px-2 text-xs gap-1 border-yellow-200 text-yellow-700 hover:bg-yellow-50"
              >
                <Plus className="h-3 w-3" />
                Nova Observação
              </Button>
            </div>

            <div className="space-y-2">
              {procedure.observations.map((obs, idx) => (
                <div key={idx} className="flex gap-2 items-start p-2 bg-yellow-50/50 rounded border-yellow-200">
                  <div className="flex items-center justify-center w-4 h-4 bg-yellow-500 text-white rounded-full text-xs font-medium mt-1">
                    {idx + 1}
                  </div>
                  <Textarea
                    value={obs}
                    onChange={e => handleObservationChange(idx, e.target.value)}
                    placeholder="Digite uma observação..."
                    className="flex-1 min-h-[60px] text-xs border-yellow-300 bg-white"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveObservation(idx)}
                    disabled={procedure.observations.length === 1}
                    className="h-7 w-7 p-0 text-red-500 hover:bg-red-50 mt-1"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-purple-600" />
              <h3 className="text-sm font-medium text-gray-900">Métricas de Análise</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {(['CHO', 'PTN', 'LIP', 'absorbance'] as (keyof Metrics)[]).map(key => (
                <div key={key} className="space-y-1">
                  <Label className="text-xs font-medium text-gray-700 uppercase">{key}</Label>
                  <Input
                    value={procedure.metrics[key]}
                    onChange={e => handleMetricChange(key, e.target.value)}
                    placeholder={`Valor ${key}`}
                    className="h-8 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <SheetFooter className="gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 h-9 text-sm"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1 h-9 text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            <FlaskConical className="h-3 w-3 mr-1" />
            Salvar Procedimento
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
