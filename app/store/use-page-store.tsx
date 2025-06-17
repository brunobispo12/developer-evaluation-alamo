import { create } from 'zustand'

interface PageState {
  displayName: string
  setDisplayName: (name: string) => void
}

export const usePageStore = create<PageState>((set) => ({
  displayName: 'Página Inicial',
  setDisplayName: (displayName) => set({ displayName }),
}))
