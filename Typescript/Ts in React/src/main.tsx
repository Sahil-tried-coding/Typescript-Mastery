import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { ThemeContext } from './components/Context/ThemeContext.tsx'



const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <ThemeContext>
<QueryClientProvider client={queryClient}>
        <App />

</QueryClientProvider>
    </ThemeContext>
)
