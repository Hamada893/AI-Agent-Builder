import AppHeader from '@/components/app-header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      <section className='flex-1' aria-label='Main content'>
          {children}
      </section>
    </>
  )
}

export default Layout