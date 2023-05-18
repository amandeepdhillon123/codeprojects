//   import ReactDOM  from "react-dom"

// //   import { createRoot } from 'react-dom/client';
//   import App from "./App";
//   import './index.css'

//   ReactDOM.render(<App/>,document.getElementById('root'))
  


  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './App.jsx'
  import './index.css'
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )