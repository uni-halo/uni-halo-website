import type { NavBar as INavBar } from '@/types/layout'

interface NavBarProps {
  onChange?: (navBar: INavBar) => void
}

export const NavBar = (props: NavBarProps) => {
  console.log(props)
  return (
    <>
      <nav className='fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl'></nav>
    </>
  )
}
