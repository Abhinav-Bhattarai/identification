"use client";
import React, { useEffect, useState } from "react";
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
import { string } from "yup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getOptions = (colors: Record<string, string>) => {
  const { cardBackground, mutedTextColor, textColor } = colors
  return {
    border: {
      radius: 10,
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        align: "start" as "start",
        position: "bottom" as "bottom",
        title: {
          padding: "8px",
        },
        labels: {
          usePointStyle: true,
          boxWidth: 6,
        },
      },
      tooltip: {
        padding: {
          top: 8,
          left: 12,
          right: 12,
          bottom: 8,
        },
        backgroundColor: cardBackground,
        bodyColor: mutedTextColor,
        titleColor: textColor,
        yAlign: "bottom" as "bottom",
        bodySpacing: 8,
        titleFont: {
          family: "sans-serif",
          width: "bold" as "bold",
        },
        bodyFont: {
          family: "sans-serif",
          width: "bold" as "bold",
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
        },
      },
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
          color: mutedTextColor,
          font: {
            size: 14,
            family: "sans-serif",
          },
        },
      },
      y: {
        stacked: true,
        grid:{
          color: 'hsl(215.4 16.3% 46.9% / 0.3)'
        },
        border: {
          display: false,
          dash: [5, 3]
        },
        ticks: {
          color: mutedTextColor,
          font: {
            size: 14,
            family: "sans-serif",
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
}

const data = {
  labels: [
    "SAT 28",
    "",
    "",
    "SUN 29",
    "",
    "",
    "MON 30",
    "",
    "",
    "TUE 31",
    "",
    "",
    "WED 1",
  ],
  datasets: [
    {
      label: "Login Failed",
      data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 50000)),
      backgroundColor: "#f43f5e",
      stack: "Stack 0",
      borderRadius: 6,
      maxBarThickness: 12,
    },
    {
      label: "Login Succeeded",
      data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 50000)),
      backgroundColor: "#2563EB",
      stack: "Stack 0",
      maxBarThickness: 12,
    },
    {
      label: "Other",
      data: Array.from({ length: 50 }, () => Math.floor(Math.random() * 50000)),
      backgroundColor: "#a78bfa",
      stack: "Stack 0",
      maxBarThickness: 12,
    },
  ],
};

export default function EventChart() {
  const [colors, setColors] = useState<Record<string, string>>({})

  useEffect(() => {
    const style = getComputedStyle(document.body);
    const cardBackground = `hsl(${style.getPropertyValue('--card')})`;
    const mutedTextColor = `hsl(${style.getPropertyValue('--muted-foreground')})`;
    const textColor = `hsl(${style.getPropertyValue('--foreground')})`;
    setColors({
      cardBackground,
      mutedTextColor,
      textColor
    })
  }, [])

  return (
    <div className="h-80 px-4 lg:px-8">
      {/* @ts-ignore */}
      <Bar options={getOptions(colors)} data={data} />
    </div>
  );
}
