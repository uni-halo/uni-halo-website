import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useFancybox } from '@/hooks/useFancybox'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

export const Layout = () => {
  const location = useLocation()

  const [fancyboxRef] = useFancybox({})

  return (
    <main ref={fancyboxRef}>
      <div className='w-full min-h-screen bg-[#05080A] selection:bg-neo-yellow selection:text-white'>
        {/* 导航栏 */}
        {/* <NavBar /> */}

        {/* 子路由渲染位置 */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        {/* 页脚 */}
        {/* <Footer /> */}
      </div>
    </main>
  )
}
