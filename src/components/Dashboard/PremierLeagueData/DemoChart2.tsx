
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { DashboardCard } from '../Applications/applicationsProvider';

const  LineStylesDemo = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: [ "Radius Mean", "Texture Mean", "Perimeter Mean", "Area Mean", "Smoothness Mean",
            "Compactness Mean", "Concavity Mean", "Concave Points Mean", "Symmetry Mean",
            "Fractal Dimension Mean", "Radius SE", "Texture SE", "Perimeter SE", "Area SE",
            "Smoothness SE", "Compactness SE", "Concavity SE", "Concave Points SE",
            "Symmetry SE", "Fractal Dimension SE", "Radius Worst", "Texture Worst",
            "Perimeter Worst", "Area Worst", "Smoothness Worst", "Compactness Worst",
            "Concavity Worst", "Concave Points Worst", "Symmetry Worst",
            "Fractal Dimension Worst"],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--blue-500')
                }
              
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <DashboardCard>
            <Chart type="line" data={chartData} options={chartOptions} width={'100%'} height={'100%'} />
        </DashboardCard>

    )
}


export default LineStylesDemo;