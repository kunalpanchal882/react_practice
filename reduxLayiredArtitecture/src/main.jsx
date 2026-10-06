import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import Approutes from './Routes/Approutes.jsx'
import { ToastContainer } from 'react-toastify'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
<Provider store={store}>
  <Approutes />
  <ToastContainer/>
</Provider>
  </QueryClientProvider>
)
