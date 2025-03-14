import { useState } from 'react'
import dropDownBtn from '../assets/dropDown-btn.png'
import MeetingsOverlay from './meetingsOverlay'

function MeetingsList({ meetings, onSelect, className }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <div className={`ml-5 ${className}`}>
            { /* Button */ }
            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                <img src={dropDownBtn} alt='dropDown-btn' className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            </button>
        </div>
        { /* Dropdown */ }
        <div>
            {isOpen && (
                <MeetingsOverlay meetings={meetings} onSelect={onSelect} onClose={() => setIsOpen(false)} />
            )}
        </div>
    </>
  )
}

export default MeetingsList