import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css"; // Default heatmap styles
import { format, subYears } from "date-fns";
import { LEETCODE_URL } from "../../utils/constants";
import axios from "axios";

const fetchLeetCodeHeatmap = async (username) => {
    try {
        // const response = await fetch(LEETCODE_URL+"/leetcode", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ username }),
        // });
        
        const response = await axios.post(LEETCODE_URL+"/leetcode",{username:username},{
            withCredentials:true,
            headers:{"Content-Type":"application/json"}
        })

        // const data = await response.json();
        const data = response?.data;
        if (data.data && data.data.matchedUser) {
            return JSON.parse(data.data.matchedUser.submissionCalendar);
        } else {
            console.error("Failed to fetch LeetCode data:", data);
            return {};
        }
    } catch (error) {
        console.error("Error fetching LeetCode heatmap:", error);
        return {};
    }
};

const LeetCodeHeatmap = ({ username }) => {
    const [heatmapData, setHeatmapData] = useState([]);

    useEffect(() => {
        const loadHeatmapData = async () => {
            const submissions = await fetchLeetCodeHeatmap(username);
            
            // Convert timestamp submissions into the required format
            const formattedData = Object.keys(submissions).map((timestamp) => ({
                date: format(new Date(parseInt(timestamp) * 1000), "yyyy-MM-dd"),
                count: submissions[timestamp],
            }));

            setHeatmapData(formattedData);
        };

        loadHeatmapData();
    }, [username]);

    return (
        <div className="mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Leetcode Contribution Heatmap</h2>
        <div className="bg-[#0c0e19] p-6 rounded-lg shadow-lg border border-white">
            <h2 className="text-lg font-bold text-white mb-4">DVD_Mathadis</h2>
            <CalendarHeatmap
                startDate={subYears(new Date(), 1)}
                endDate={new Date()}
                values={heatmapData}
                classForValue={(value) => {
                    if (!value) return "color-empty";
                    return `color-scale-${Math.min(value.count, 4)}`; // Cap at 4 levels
                }}
                tooltipDataAttrs={(value) => ({
                    "data-tip": `${value.date}: ${value.count || 0} submissions`,
                })}
            />
        </div>
        </div>
    );
};

export default LeetCodeHeatmap;
