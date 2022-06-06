import React, { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2';

import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement } from 'chart.js';
import CountryTable from './CountryTable';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler, BarElement
)

const Countryscreen = (props) => {
    const [countryData, setcountryData] = useState() ;

    let countryName = props.match.params.id;

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                //label: "",
                data: [50, 60, 70, 25],
                backgroundColor: 'yellow',
                /* borderColor: 'green',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true, */

                /* options: {
                    scales: {
                        yAxes: [{
                            tricks: {
                                beginAtZero: true,
                                display: false,
                            },
                        },
                        ],
                    },
                } */
            },
        ]
    })
    const [data1, setData1] = useState({
        labels: [],
        datasets: [
            {
                label: "",
                data: [50, 60, 70, 25],
                backgroundColor: 'yellow',
                borderColor: 'green',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true,

                options: {
                    scales: {
                        yAxes: [{
                            tricks: {
                                beginAtZero: true,
                                display: false,
                            },
                        },
                        ],
                    },
                }
            },
        ]
    })

    useEffect(() => {

        let url1 = `https://raw.githubusercontent.com/ZakariaBouguira/MonkeyPox/master/data/by_country/monkeypox_time_series_${countryName}.json`;

        fetch(url1).then((res) => {
            return res.json();
        })
            .then((allData) => {

                console.log(allData);
                setcountryData(allData) ;
                const dateConfirmation = allData.map((obj) => {
                    return obj.Date_confirmation;
                })

                const newInfected = allData.map((obj) => {
                    return obj.New_infected;
                })

                const totalInfected = allData.map((obj) => {
                    return obj.Total_infected;
                })

                setData({
                    ...data,
                    labels: dateConfirmation,
                    datasets: [
                        {
                            label: "",
                            data: newInfected,
                            backgroundColor: 'yellow',
                            borderColor: 'green',
                            tension: 0.4,
                            fill: true,
                            pointStyle: 'rect',
                            pointBorderColor: 'blue',
                            pointBackgroundColor: '#fff',
                            showLine: true,

                        },
                    ]
                })

                setData1({
                    ...data,
                    labels: dateConfirmation,
                    datasets: [
                        {
                            label: "",
                            data: totalInfected,
                            backgroundColor: 'yellow',
                            borderColor: 'green',
                            tension: 0.4,
                            fill: true,
                            pointStyle: 'rect',
                            pointBorderColor: 'blue',
                            pointBackgroundColor: '#fff',
                            showLine: true,

                            options: {
                                scales: {
                                    yAxes: [{
                                        tricks: {
                                            beginAtZero: true,
                                            display: false,
                                        },
                                    },
                                    ],
                                },
                            }
                        },
                    ]
                })

                return allData;
            })
            .catch((err) => {
                console.log(err)
            })

    }, []);

    return (
        <>
            <div className='containerCharts'>
                <div className="chart1" style={{ width: '35rem', height: '25rem' }}>
                    <Bar data={data} options={{ plugins: { legend: false } }}>Hello</Bar>
                </div>
                <div className="chart2" style={{ width: '35rem', height: '25rem' }}>
                    <Line data={data1} options={{ plugins: { legend: false } }}>Hello</Line>
                </div>
            </div>
            <CountryTable countryData={countryData} countryName={countryName} />
        </>
    )
}

export default Countryscreen