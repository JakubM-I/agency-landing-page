import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { routes } from './features/routes/routes.tsx'
import { RouterProvider } from 'react-router/dom'

const router = createBrowserRouter(routes, {
  basename: "/sunnyside/",
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
