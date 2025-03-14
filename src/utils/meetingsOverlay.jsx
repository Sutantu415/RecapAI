import React, { useEffect, useRef, useState } from 'react';

function MeetingsOverlay({ meetings, onSelect, onClose }) {
  const overlayRef = useRef();
  const [openMeeting, setOpenMeeting] = useState(null);

  useEffect(() => {
    // Handle Clicks outside overlay
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }
  , [onClose]);

  const deleteMeeting = (title) => {
    const updatedMeetings = meetings.filter(meeting => meeting.title !== title);
    localStorage.setItem('meetings', JSON.stringify(updatedMeetings));
    onClose();
    window.location.reload();
  }

  return (
    <div className="fixed inset-0 z-5 flex text-left">
      <div ref={overlayRef} className="bg-[#202020] text-white font-Glacial w-2/10 rounded-r-3xl">
      <button className='text-[30px] pl-3' onClick={() => { onClose() }}>☰</button>
        <ul>
          {meetings.length > 0 ? (
            meetings.map((meeting, index) => (
              <li key={index} className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-100/25 relative">
                {/* Clicking on the title selects the meeting */}
                <span onClick={() => { onSelect(meeting); onClose(); }}>{meeting.title}</span>

                <button onClick={(e) => { e.stopPropagation(); setOpenMeeting(openMeeting === index ? null : index); }}> ⋯ </button>
                {openMeeting === index && (
                  <div className="absolute right-5 top-8 bg-gray-800 text-white text-sm rounded shadow-lg w-28 z-10">
                    <button 
                      className="block w-full px-4 py-2 text-left hover:bg-red-500"
                      onClick={() => deleteMeeting(meeting.title)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="px-4 py-2">No meetings found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MeetingsOverlay;