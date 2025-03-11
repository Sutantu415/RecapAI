import { useState, useEffect } from "react";
import "../App.css"; // Keep your existing CSS imports
import { useNavigate, useLocation } from "react-router-dom";

function ResultPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [summary, setSummary] = useState("");
    const [actionItems, setActionItems] = useState("");
    const response = location.state?.response || "No response found";

    // Load the response into the state
    useEffect(() => {
        if (response !== "No response found") {
            const responseText = response.content;
            console.log(responseText);

            const summaryMatch = responseText.match(/Summary:\s([\s\S]*?)\n\nAction Items:/);
            const actionItemsMatch = responseText.match(/Action Items:\s([\s\S]*)/);

            setSummary(summaryMatch ? summaryMatch[1].trim() : "No summary found.");
            setActionItems(actionItemsMatch ? actionItemsMatch[1].trim() : "No action items found.");
        }
    }, [response]);

    return (
        <>
            <div className="flex min-h-scree font-Glacial">
                <div className="w-full mr-20">
                    { /* Div for back to meeting button */ }
                    <div className="flex justify-end w-full">
                        <button className='bg-[#8C52FF] hover:bg-[#7A42E6] text-white text-[20px] rounded-lg px-5 py-2 font-Glacial mt-12' onClick={() => {navigate('/meetingInfo')}}>Back to Meeting Details</button>
                    </div>
                    <h1 className="font-bold text-4xl text-left font-GlacialBold">Meeting Summary</h1>
                    <textarea className='w-full mt-4 pl-3 py-2 pb-50 bg-gray-300/25' readOnly placeholder="Generated summary based on the provided transcript..." value={summary} />
                    <h1 className="font-bold text-4xl text-left font-GlacialBold mt-5">Action Items & To-Do</h1>
                    <textarea className='w-full mt-4 pl-3 py-2 pb-50 bg-gray-300/25' readOnly placeholder="Generated action items..." value={actionItems} />
                </div>
            </div>
        </>
    )
}

export default ResultPage;