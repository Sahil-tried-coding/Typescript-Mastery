import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import {QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { ThemeContext } from './components/Context/ThemeContext.tsx'
import { Provider } from 'react-redux'
import { store } from './components/Redux/Store.tsx'



// const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <ThemeContext>
        <Provider store={store}>
        <App />

        </Provider>
{/* <QueryClientProvider client={queryClient}> */}

{/* </QueryClientProvider> */}
    </ThemeContext>
)
