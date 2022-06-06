import { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement } from 'chart.js';

ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler, BarElement
)

function BarChar(props) {

    /* console.log(props) ; */

    const dateConfirmation = [];
    const chartData = [];

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: false,
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
        let url1 = `https://raw.githubusercontent.com/ZakariaBouguira/MonkeyPox/master/data/by_country/monkeypox_time_series_${props.name}.json`;
        //Date_confirmation

        fetch(url1).then((res) => {
            return res.json();
        })
            .then((allData) => {
                console.log(allData);
                const dateConfirmation = allData.map((obj) => {
                    return obj.Date_confirmation;
                })

                const chartData = allData.map((obj) => {
                    return obj.New_infected;
                })
                setData({
                    ...data,
                    labels: dateConfirmation,
                    datasets: [
                        {
                            label: false,
                            data: chartData,
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



                return allData;
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(dateConfirmation);
        console.log(chartData);
    }, [])


    return (
        <div className="App" style={{ width: '250px', height: '7.5rem' }}>
            <Bar data={data} options={{ scales: { y: { display: false }, x: { display: false } }, plugins: { legend: false } }} >Hello</Bar>
        </div>
    );
}

export default BarChar;