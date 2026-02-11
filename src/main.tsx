import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import './index.css'
import App from './App.tsx'
import { MotionConfig, motion } from 'framer-motion';

import { AppProvider } from './context/AppContext.tsx'


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <MotionConfig>
          <motion.div viewport={{ once: true }}>
            <App />
          </motion.div>
        </MotionConfig>
      </AppProvider>
    </BrowserRouter>,
  // </StrictMode>,
)