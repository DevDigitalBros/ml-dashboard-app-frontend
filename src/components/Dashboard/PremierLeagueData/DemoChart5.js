import React from 'react';
import { Chart } from 'primereact/chart';
import { DashboardCard } from '../Applications/applicationsProvider';

const ComboDemo = ({ data }) => {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const chartData = {
        labels: [
            "Radius Mean", "Texture Mean", "Perimeter Mean", "Area Mean", "Smoothness Mean",
            "Compactness Mean", "Concavity Mean", "Concave Points Mean", "Symmetry Mean",
            "Fractal Dimension Mean", "Radius SE", "Texture SE", "Perimeter SE", "Area SE",
            "Smoothness SE", "Compactness SE", "Concavity SE", "Concave Points SE",
            "Symmetry SE", "Fractal Dimension SE", "Radius Worst", "Texture Worst",
            "Perimeter Worst", "Area Worst", "Smoothness Worst", "Compactness Worst",
            "Concavity Worst", "Concave Points Worst", "Symmetry Worst",
            "Fractal Dimension Worst"
        ],
        datasets: [
            {
                type: 'line',
                label: 'Breast Tumor Report Data',
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: data
            }
        ]
    };


    const chartOptions = {
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
            }
        }
    };
    return (
        <DashboardCard>
            {chartData.labels.length > 0 && (
                <Chart type="line" data={chartData} options={chartOptions} width={'25vw'} height={'45vh'} />
            )}
        </DashboardCard>
    )
};

ComboDemo.defaultProps = {
    data: []
};

export default ComboDemo;
