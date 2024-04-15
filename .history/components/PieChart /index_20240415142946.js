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
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data:[10,30,14,15,5,12,25],
                    borderClor: [
                        'rgba(255, 162, 235, 0.4)',
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(53, 120, 235, 0.4)',
                        'rgba(53, 162, 88, 0.4)',
                        'rgba(22, 58, 235, 0.4)',
                        'rgba(53, 250, 12, 0.4)',
                    ],
                    backgroundColor: [
                        'rgba(255, 162, 235, 0.4)',
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(53, 120, 235, 0.4)',
                        'rgba(53, 162, 88, 0.4)',
                        'rgba(22, 58, 235, 0.4)',
                        'rgba(53, 250, 12, 0.4)',
                    ],
                    borderWidth: 1
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
        <div>
            <Pie data={chartData} options={chartOptions} style={{ width: "800px", height: "500px"}}/>
        </div>
        </>
    )
}