import { ChevronRightBold } from '@pretto/picto'
import { useState } from 'react'

import './fonts/MaisonNeue.css'

import ButtonSquare from './components/ButtonSquare'
import Checkbox from './components/Checkbox'
import TextField from './components/TextField'

export default function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [textFieldValue, setTextFieldValue] = useState('')

  const handleCheckboxChange = () => {
    setIsChecked((isChecked) => !isChecked)
  }

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.currentTarget.value)
  }

  return (
    <div>
      <TextField onChange={handleTextFieldChange} placeholder="Search..." value={textFieldValue} />

      <ButtonSquare>
        <ChevronRightBold />
      </ButtonSquare>

      <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
    </div>
  )
}
