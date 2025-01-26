import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Use this -V-


// import { StrictMode, lazy, Suspense } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';

// const App = lazy(() => import('./App.jsx'));

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <App />
//       </Suspense>
//     </BrowserRouter>
//   </StrictMode>,
// );




// Old


// import React, {lazy} from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// const App = lazy(() => import('./App'))

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )
