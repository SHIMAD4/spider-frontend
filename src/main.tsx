import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { StoreProvider } from '@app/state/StoreProvider.tsx'
import '@app/styles/reset.css'

import TasksPage from '@pages/tasks'

import './index.module.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider>
            <TasksPage />
        </StoreProvider>
    </StrictMode>,
)
