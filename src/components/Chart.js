import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';


import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler, BarElement
)


function Chart(props) {
    /*     const dateConfirmation = [];
        const newInfected = [];
        const totalInfected = []; */

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                //label: "",
                data: [50, 60, 70, 25],
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
                /*  pointStyle: 'rect', */
                /* pointBorderColor: 'blue',
                pointBackgroundColor: '#fff', */
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
        let url1 = `https://raw.githubusercontent.com/ZakariaBouguira/MonkeyPox/master/data/by_country/monkeypox_time_series_World.json`;

        fetch(url1).then((res) => {
            return res.json();
        })
            .then((allData) => {
                console.log(allData);
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
                            backgroundColor: '#CC1100',
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
                setData1({
                    ...data,
                    labels: dateConfirmation,
                    datasets: [
                        {
                            label: "",
                            data: totalInfected,
                            backgroundColor: '#616161',
                            borderColor: '#CC1100',
                            tension: 0.4,
                            fill: true,
                            PointElement: false,

                            /* pointStyle: 'rect', */
                            /* pointBorderColor: false, */
                            /* pointBackgroundColor: '#fff', */
                            showLine: true,
                            borderWidth: 5,
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
    }, [])


    return (
        <div className='containerCharts'>
            <h3 className='chart-title'> new Infected </h3>
            <div className="chart1" >
                <Bar data={data} options={{ plugins: { legend: false } }} ></Bar>
            </div>

            <h3 className='chart-title'> total Infected </h3>

            <div className="chart2"  >
                <Line data={data1} options={{
                    plugins: { legend: false }, elements: {
                        point: {
                            radius: 0
                        }
                    }
                }}></Line>
            </div>
        </div>
    );
}

export default Chart;