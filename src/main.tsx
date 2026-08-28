import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/reset.css'
import './index.module.scss'
import TasksPage from './pages/tasks'
import { StoreProvider } from './app/store/StoreProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <TasksPage />
        </StoreProvider>
    </StrictMode>,
)
