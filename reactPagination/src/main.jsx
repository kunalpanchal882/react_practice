import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './pages/Product.jsx'
import Test from './components/Test.jsx'
import Form from './components/Form.jsx'
import Pagination from './components/Pagination.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    // <ToastContainer>
    <>
        <App />
        <ToastContainer/>
    </>
    // </ToastContainer>
)
