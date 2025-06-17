# Rotinas de Laboratório — Mini-Documentação

> **Resumo**  
> Aplicação web para cadastro e gestão de rotinas/procedimentos laboratoriais, construída com **Next.js 14**, **TypeScript** e **shadcn/ui** (Radix UI + Tailwind).  
> Permite criar procedimentos com passos, observações, métricas de análise e feedback via *toast*.

---

## 1. Funcionalidades

| Módulo | Descrição rápida |
|--------|------------------|
| **Rotinas** (`/cadastros/rotinas`) | • Listagem de rotinas  • Criação/edição via *Sheet* («drawer»)  • Validação simples e *toasts* de sucesso/erro. |

### Fluxo de criação de rotina

1. Clique no botão **Nova Rotina**.  
2. Preencha **Título** e **Tempo de Execução** (obrigatórios).  
3. Adicione Passos, Observações e Métricas conforme necessário.  
4. Clique **Salvar Procedimento** → um *toast* confirma e o formulário é limpo.

---

## 2. Requisitos

- **Node.js ≥ 18.18**
- **pnpm** (recomendado) ou npm/yarn
- Navegador moderno

---

## 3. Instalação

```bash
# clone
git clone https://github.com/brunobispo12/developer-evaluation-alamo/
cd developer-evaluation-alamo

# dependências
npm i      # ou pnpm install  / yarn
