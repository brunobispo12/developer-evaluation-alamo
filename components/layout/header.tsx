// Header.tsx
'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Grid2X2, Grid2X2Check, Inbox, Info, Settings } from 'lucide-react'
import { usePageStore } from '@/app/store/use-page-store'
import { routes } from '@/app/routes'          

export default function Header() {
  const rawDisplayName = usePageStore((s) => s.displayName)
  const displayName = rawDisplayName || routes[0].displayName

  return (
    <header className="max-w-screen-xl mx-auto w-full flex justify-between items-center py-6">
      <h2 className="font-medium">{displayName}</h2>

      <div className="flex items-center gap-4">
        <h2 className="text-xl font-medium text-primary">Alamo</h2>

        <Button className="h-8">
          <Grid2X2Check /> Tarefas
        </Button>

        <Button variant="ghost" className="-m-3">
          <Inbox className="size-[1.3rem] text-primary" />
        </Button>

        <Button variant="ghost" className="-m-3">
          <Info className="size-[1.3rem] text-primary" />
        </Button>

        <Button variant="ghost" className="-m-3">
          <Settings className="size-[1.3rem] text-primary" />
        </Button>
      </div>
    </header>
  )
}
