import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContext } from './components/Context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeContext>

        <App />
    </ThemeContext>
)
