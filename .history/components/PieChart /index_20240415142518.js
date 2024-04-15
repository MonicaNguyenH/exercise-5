import styles from './PireChart.module.css';
import { Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sale $',
                    data:[10,30,14,15,5,12,25,17],
                    borderClor: 'rgb(53, 162, 235 )',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        })
        
        setChartOptions({
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    dispaly: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: false,
                reponsive: true
            }
        })
    }, [])
    
    return(
        <>
        <Bar data={chartData} options={chartOptions}/>
        </>
    )
}