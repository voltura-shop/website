import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>hello world</h1>
      <h1>it works</h1>
    </>
  )
}
