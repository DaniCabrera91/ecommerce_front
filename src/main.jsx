import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './reset.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)