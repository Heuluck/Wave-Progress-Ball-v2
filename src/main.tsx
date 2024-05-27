import React from 'react'
import ReactDOM from 'react-dom/client'
import WaveBall from './components/ball/ball'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WaveBall value={50} />
  </React.StrictMode>,
)
