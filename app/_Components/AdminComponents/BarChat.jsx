'use client'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, Title, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale, Title, LinearScale, BarElement, Tooltip, Legend
);

export const BarChat = () => {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    useEffect(() => {
        setChartData({
            labels: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', "sun"],
            datasets: [
                {
                    label: "Sales Trend",
                    data: [30, 22, 45, 9, 19, 66, 45],
                    backgroundColor: "#af7643"
                }
            ]
        })
    }, [])
    return (
        <div className="w-[80%]  h-[40vh] lg:h-[50vh] overflow-hidden">
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: true,


                }}
            />
        </div>
    )
}
