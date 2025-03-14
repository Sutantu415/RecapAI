import { useState, useEffect } from "react"
import MeetingsList from '/src/utils/meetings.jsx'
import "../App.css"; // Keep your existing CSS imports
import { useNavigate, useLocation } from "react-router-dom"

function ResultPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [summary, setSummary] = useState("");
    const [actionItems, setActionItems] = useState("");
    const response = location.state?.response || "No response found";
    const meetingTitle = location.state?.meetingTitle || "No meeting title found";
    const meetings = JSON.parse(localStorage.getItem('meetings')) || [];

    // Load the response into the state and into localStorage
    useEffect(() => {
        if (response !== "No response found") {
            console.log(response);
            const summaryMatch = response.match(/Summary:\s([\s\S]*?)\n\nAction Items:/);
            const actionItemsMatch = response.match(/Action Items:\s([\s\S]*)/);

            setSummary(summaryMatch ? summaryMatch[1].trim() : "No summary found.");
            setActionItems(actionItemsMatch ? actionItemsMatch[1].trim() : "No action items found.");

            // Save to localStorage
            saveMeeting({
                title: meetingTitle,
                summary: summaryMatch[1].trim(),
                actionItems: actionItemsMatch[1].trim(),
                response: response,
            });
        }
    }, [response, meetingTitle]);

    // Function to save the summary, action items, and meeting name to localStorage
    const saveMeeting = (meeting) => {
        const meetings = JSON.parse(localStorage.getItem('meetings')) || [];
        if(!meetings.find(m => m.title === meeting.title)) {
            meetings.push(meeting);
            localStorage.setItem('meetings', JSON.stringify(meetings));
        }
    }
    
    const handleSelectMeeting = (meeting) => {
        setSummary(meeting.summary);
        setActionItems(meeting.actionItems);
    };

    // TODO: Add a button to copy the summary and action items to the clipboard (use the Clipboard API)
    // Double check whether its just to copy action items or summary as well

    return (
        <>
            { /* Header */ }
            <div className="flex items-center w-98/100">
                <MeetingsList meetings={meetings} onSelect={handleSelectMeeting} />
                <button className='bg-[#8C52FF] hover:bg-[#7A42E6] text-white text-[20px] rounded-lg px-5 py-2 font-Glacial mt-12 ml-auto' onClick={() => {navigate('/meetingInfo')}}>Back to Meeting Details</button>
            </div>
            { /* Main content */ }
            <div className="flex min-h-screen font-Glacial ml-20 mr-30">
                <div className="w-full">
                    { /* Div for back to meeting button */ }
                    <h1 className="font-bold text-4xl text-left font-GlacialBold">Meeting Summary</h1>
                    <textarea id='summary' className='w-full mt-4 pl-3 py-2 pb-50 bg-gray-300/25' readOnly placeholder="Generated summary based on the provided transcript..." value={summary} />
                    <></>
                    <div className="flex w-full mt-5 gap-5 justify-between">
                        <h1 className="font-bold text-4xl text-left font-GlacialBold">Action Items & To-Do</h1>
                        <button className='bg-[#545454] hover:bg-[#484848] text-white text-[18px] rounded-lg px-5 font-Glacial' onClick={() => {}}>Copy All</button>
                    </div>
                    <textarea className='w-full mt-4 pl-3 py-2 pb-50 bg-gray-300/25' readOnly placeholder="Generated action items..." value={actionItems} />
                </div>
            </div>
        </>
    )
}

export default ResultPage;