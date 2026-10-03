import { useState } from 'react'

import './index.css'
import Header from './Header'
import Content from './Content'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <body className="bg-base text-white min-h-screen">
      <Analytics/>
      <Header />
      <Content />
    </body>
  )
}

export default App
