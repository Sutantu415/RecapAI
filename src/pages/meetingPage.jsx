import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Keep your existing CSS imports
import { SYSTEM_CONFIG } from "../common/constants";
import { messageGPT } from "../utils/chatGPT";
import { readFile } from "../utils/files";

function MeetingPage() {
  // State for meeting title, file, and transcript
  const [meetingTitle, setMeetingTitle] = useState("");
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState("");
  
  const navigate = useNavigate();

  const handleGPT = (transcript) => {
    const prompt = `Summarize the following meeting transcript and extract action items. Return the response in **exactly** this format:
    Summary:
    {Summary}

    Action Items:
    - {First Action Item}
    - {Second Action Item}
    - {Additional Action Items, if any}

    Meeting Transcript:
    "${transcript}"`;

    messageGPT(SYSTEM_CONFIG, {
      role: "user",
      content: prompt
    }).then((response) => {
        navigate('/result', { state: { response }});
    }).catch((error) => {
        console.error(error);
    });
  }
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the meeting title is empty
    if (meetingTitle === "") {
      alert("Please enter a meeting title");
      return;
    }
    // Check if the file and transcript is empty
    if (file === null && transcript === "") {
      alert("Please choose a file or paste a transcript");
      return;
    }

    // If file and transcript are not empty, return because only one can be processed
    if (file !== null && transcript !== "") {
      alert("Please choose only one option: file or transcript");
      return;
    }

    // Process the file or transcript
    if (file !== null) {
      if (!file.type.startsWith("text")) {
        alert("Unsupported file type. Please select a text file");
        return;
      }

      readFile(file, (result) => handleGPT(result));
    } else {
      handleGPT(transcript);
    }
  }

  // Clear function to reset the form
  const clearFunction = () => {
    setMeetingTitle("");
    setFile(null);
    setTranscript("");
  };

  return (
    <>
        <div className="flex min-h-screen pr-10 pl-5">
            <form className="w-full font-Glacial" onSubmit={ handleSubmit }>
              { /* Meeting Details Form Header */}
              <h1 className=" font-bold text-4xl text-left font-GlacialBold mt-20">Meeting Details</h1>
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
                <button type="submit" className='bg-[#8C52FF] hover:bg-[#7A42E6] text-white rounded-lg px-4 py-2' >Process Meeting</button>
                { /* Clear Button */ }
                <button type="button" className='bg-[#545454] hover:bg-[#484848] text-white rounded-lg px-8' onClick={clearFunction}>Clear</button>
              </div>
            </form>
        </div>
    </>
  )
}

export default MeetingPage;
