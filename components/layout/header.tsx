'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Grid2X2, Inbox, Info, Settings } from 'lucide-react'
import { usePageStore } from '@/app/store/use-page-store'

export default function Header() {
  const displayName = usePageStore((s) => s.displayName)

  return (
    <header className="max-w-screen-xl mx-auto w-full flex justify-between items-center py-6">
      <h2 className='text-lg font-medium'>{displayName}</h2>

      <div className='flex items-center gap-4'>
        <h2 className='text-xl font-medium text-primary'>
          Alamo
        </h2>
        <Button className='h-8'>
          <Grid2X2 /> Tarefas
        </Button>
        <Button variant='ghost' className='-m-2'>
          <Inbox className='w-5 h-5 text-primary' />
        </Button>
        <Button variant='ghost' className='-m-2'>
          <Info className='w-5 h-5 text-primary' />
        </Button>
        <Button variant='ghost' className='-m-2'>
          <Settings className='w-5 h-5 text-primary' />
        </Button>
      </div>
    </header>
  )
}
