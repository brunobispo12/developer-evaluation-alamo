import React, { type PropsWithChildren } from 'react'
import { QueryProvider } from './react-query'
import { Toaster } from 'sonner'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      {children}
      <Toaster richColors position='top-center' />
    </QueryProvider>
  )
}
