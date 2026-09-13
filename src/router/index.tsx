import { createBrowserRouter, type RouteObject } from 'react-router'
import { Layout } from './lazyViews'
import { Index } from '@/views/Home'

const mainRoutes: RouteObject[] = [
  {
    id: 'index',
    path: '/',
    element: <Index />,
  },
]

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [...mainRoutes],
    },
  ],
  {
    basename: '/',
  },
)

export default router
