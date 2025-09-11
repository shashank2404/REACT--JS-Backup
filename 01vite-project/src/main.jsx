import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import Chai from './chai.jsx'
import './index.css'
import App from './App.jsx'
const element = React.createElement(
  'a',
  {href : 'http://google.com',target : '_blank'},
  'click me to visit',
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {element} */}
    <Chai/>
  </StrictMode>,
)
