import styles from './HorizontalChart.module.css';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'data 1',
                    data:[10,30,14,15,5,12,25,17],
                    borderClor: 'rgb(53, 162, 235 )',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                },
                {
                    label: 'data 2',
                    data:[10,30,14,15,5,12,25,17],
                    borderClor: 'rgb(44, 162, 235 )',
                    backgroundColor: 'rgba(53, 22, 235, 0.4)'
                },
                {
                    label: 'data 3',
                    data:[10,30,14,15,5,12,25,17],
                    borderClor: 'rgb(22, 162, 235 )',
                    backgroundColor: 'rgba(53, 162, , 0.4)'
                }
            ]
        })
        
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    dispaly: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: true,
                reponsive: true
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#FFFFFC'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    ticks: {
                        color: 'red'
                    }
                }
            }
        })
    }, [])
    
    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{ width: "800px", height: "500px"}}/>
            </div>
        </>
    )
}