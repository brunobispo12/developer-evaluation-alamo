import { Home, User, Calendar, DollarSign, PencilIcon, Repeat } from 'lucide-react'

export interface AppRoute {
  name: string
  href?: string       
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  displayName: string
  children?: Array<Omit<AppRoute, 'children'>>
}

export const routes: AppRoute[] = [
  { name: 'Página Inicial', href: '/', icon: Home, displayName: 'Página Inicial' },
  { name: 'Clientes', href: '/clientes', icon: User, displayName: 'Cadastro de Clientes' },
  { name: 'Agenda', href: '/agenda', icon: Calendar, displayName: 'Agenda' },
  { name: 'Financeiro', href: '/financeiro', icon: DollarSign, displayName: 'Financeiro' },
  {
    name: 'Cadastros',
    icon: PencilIcon,
    displayName: 'Cadastros',
    children: [
      { name: 'Rotinas', href: '/cadastros/rotinas', icon: Repeat, displayName: 'Rotinas' },
    ],
  },
]
