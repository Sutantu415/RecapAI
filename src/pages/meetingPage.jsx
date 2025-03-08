import { useState } from "react";
import "../App.css"; // Keep your existing CSS imports

function MeetingPage() {
    // State for meeting title, file, and transcript
    const [meetingTitle, setMeetingTitle] = useState("");
    const [file, setFile] = useState(null);
    const [transcript, setTranscript] = useState("");

  const clearFunction = () => {
    setMeetingTitle("");
    setFile(null);
    setTranscript("");
  };

  return (
    <>
        <div className="flex min-h-screen mt-20 ">
            <form className="w-full font-Glacial">
              { /* Meeting Details Form Header */}
              <h1 className=" font-bold text-4xl text-left font-GlacialBold">Meeting Details</h1>
              { /* Meeting Title Input */ }
              <input className='w-full mt-4 pl-3 py-2 bg-gray-300/25' type="text" placeholder="Enter Meeting Title..." value={meetingTitle} onChange={(e) => setMeetingTitle(e.target.value)} />
              { /* File Upload Input */ }
              <div className='w-full mt-4 pl-3 py-2 bg-gray-300/25 text-left flex items-center'>
                <label htmlFor='fileName' className="mr-4 text-[19px]">📂</label>
                <input id='fileName' type="file" className='hidden' onChange={(e) => setFile(e.target.files[0])} />
                { /* File Upload Button as a label (cursor-pointer attribute) */ }
                <label htmlFor='fileName' className='cursor-pointer bg-[#B9B9BE] text-black rounded-md px-4 mr-4'>Choose File</label>
                <span>{file ? file.name : "No file chosen"}</span>
              </div>
              { /* Transcript Input */ }
              <textarea className='w-full mt-4 pl-3 py-2 pb-85 bg-gray-300/25' placeholder="Paste or type your meeting transcript here...." value={transcript} onChange={(e) => setTranscript(e.target.value)} />
              { /* Buttons */ }
              <div className='flex mt-2 gap-4'>
                { /* Submit Button */ }
                <button type="submit" className='bg-[#8C52FF] hover:bg-[#7A42E6] text-white rounded-lg px-4 py-2'>Process Meeting</button>
                { /* Clear Button */ }
                <button type="button" className='bg-[#545454] hover:bg-[#484848] text-white rounded-lg px-8' onClick={clearFunction}>Clear</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default MeetingPage;
