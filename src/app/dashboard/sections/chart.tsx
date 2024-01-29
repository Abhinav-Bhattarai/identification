"use client";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    border: {
        radius: 10,
    },
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        tooltip: {
            padding: {
                top: 8,
                left: 12,
                right: 12,
                bottom: 8
            },
            backgroundColor: '#fff',
            bodyColor: '#101828',
            titleColor: '#101828',
            yAlign: "bottom" as "bottom",
            bodySpacing: 8,
            titleFont: {
                family: "'Montserrat', sans-serif",
                width: 'bold' as 'bold'
            },
            bodyFont: {
                family: "'Montserrat', sans-serif",
                width: 'bold' as 'bold'
            },
            callbacks: {
                labelColor: function (tooltipItem: any) {
                    return {
                        borderColor: tooltipItem.dataset.backgroundColor,
                        backgroundColor: tooltipItem.dataset.backgroundColor,
                        height: 10,
                        width: 10,
                        borderRadius: 6,
                    };
                },
            }
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        mode: "index" as const,
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
            },
            title: {
                display: false,
            },
            ticks: {
                color: 'rgb(var(--text))',
                font: {
                    size: 14,
                    family: "Montserrat",
                    weight: 'bold' as 'bold'
                },
            },
        },
        y: {
            stacked: true,
            border: {
                display: false,
                dash: [5, 3],
            },
            ticks: {
                color: 'rgb(var(--text))',
                font: {
                    size: 14,
                    family: "Montserrat",
                    weight: 'bold' as 'bold'
                },
                // stepSize: (c: any) => {
                //     const datasets = c.chart.data.datasets
                //     return (datasets[0].data[4] + datasets[1].data[4] + datasets[2].data[4] -
                //         Math.min(...datasets[0].data)) / 4
                // }
            },
        },
    },
};


const data = {
    labels: [
        'SAT 28',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'SUN 29',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'MON 30',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'TUE 31',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'WED 1'
    ],
    datasets: [
        {
            label: "Login Failed",
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 50000)),
            backgroundColor: "#e11d48",
            stack: "Stack 0",
            borderRadius: 6,
            maxBarThickness: 12,
        },
        {
            label: "Login Succeeded",
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 50000)),
            backgroundColor: "#1d4ed8",
            stack: "Stack 0",
            maxBarThickness: 12
        },
        {
            label: "Other",
            data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 50000)),
            backgroundColor: "#9333ea",
            stack: "Stack 0",
            maxBarThickness: 12,
        }
    ]
};


export default function EventChart() {
    return (
        <div className="h-80 px-4 lg:px-8">
            <Bar options={options} data={data} />
        </div>
    )
}