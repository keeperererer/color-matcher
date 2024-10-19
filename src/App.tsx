import React, { useState, ChangeEvent } from 'react'
import './App.css'
import { findClosestColor } from './utils'
import { TargetColorItem } from './interface'
import useColorScheme from './hooks/useColorScheme'

function App() {
  const [inputColor, setInputColor] = useState<string>('')
  const [closestColor, setClosestColor] = useState<TargetColorItem>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value
    setInputColor(color)
    if (/^#[0-9A-F]{6}$/i.test(color)) {
      setClosestColor(findClosestColor(color))
    } else {
      setClosestColor(undefined)
    }
  }

  const { backgroundColor, textColor } = useColorScheme(inputColor)

  return (
    <div className="App" style={{ backgroundColor, color: textColor }}>
      <header className="App-header">
        <div className="top">
          <h1>Color Matcher</h1>
          <input type="text" value={inputColor} onChange={handleChange} placeholder="#000000" maxLength={7} />
        </div>
        {closestColor?.hex && (
          <div className="bottom">
            <p>
              输入颜色: <span style={{ color: inputColor }}>{inputColor}</span>
            </p>
            <p>
              最接近的内置颜色: <span style={{ color: closestColor.hex }}>{closestColor.name}</span>
            </p>
          </div>
        )}
      </header>
    </div>
  )
}

export default App
