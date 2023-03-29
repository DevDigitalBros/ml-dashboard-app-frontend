import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { ChartOptions } from 'chart.js';
import { PremierLeagueDataType } from '../../utils';
import { LinearScale } from 'chart.js';


const MyChartPremierLeague = () => {
    const selectpremierLeagueData = useSelector(
        (state: RootState) => state.app.selectpremierLeagueData
    );


    const config = {
        type: 'radar',
        data: selectpremierLeagueData,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    };

    


    const data = {
        datasets: [
            {
                label: 'Home Team',
                data: selectpremierLeagueData.map((data: PremierLeagueDataType) => {
                    return {
                        x: Number(data.HST),
                        y: Number(data.FTHG),
                    };
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Away Team',
                data: selectpremierLeagueData.map((data: PremierLeagueDataType) => {
                    return {
                        x: Number(data.AST),
                        y: Number(data.FTAG),
                    };
                }),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

   

    return (
        <div>
            <Scatter data={data} options={options} />
        </div>
    );
};

export default MyChartPremierLeague;
