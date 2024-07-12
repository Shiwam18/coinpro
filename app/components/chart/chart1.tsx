import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'chart.js/auto'; // Important: ensure you import the necessary Chart.js components
import { ChartData, ChartOptions } from 'chart.js';

// Dynamic import of Line component from react-chartjs-2 with SSR disabled
const Line = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), {
    ssr: false
});

const Utils = {
    CHART_COLORS: {
        red: 'rgb(255, 99, 132)',
        blue: 'rgb(54, 162, 235)'
    }
};

interface Point {
    x: number;
    y: number;
}

const MyLineChart = () => {
    const [data, setData] = useState<Point[]>([]);
    const [data2, setData2] = useState<Point[]>([]);

    useEffect(() => {
        const generatedData: Point[] = [];
        const generatedData2: Point[] = [];
        let prev = 100;
        let prev2 = 80;

        for (let i = 0; i < 1000; i++) {
            prev += 5 - Math.random() * 10;
            generatedData.push({ x: i, y: prev });
            prev2 += 5 - Math.random() * 10;
            generatedData2.push({ x: i, y: prev2 });
        }

        setData(generatedData);
        setData2(generatedData2);
    }, []);

    const chartData: ChartData<'line', Point[]> = {
        datasets: [
            {
                borderColor: Utils.CHART_COLORS.red,
                borderWidth: 1,
                pointRadius: 0,
                data: data,
            },
            
        ]
    };

    const options: ChartOptions<'line'> = {
        interaction: {
            intersect: false
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                type: 'linear',
                display: false,
                grid: {
                  display: false
                }
            },
            y: {
              type: 'linear',
              display: false,
              grid: {
                display :false
              }
            }
        },
        maintainAspectRatio: true,
        responsive: true,

    };

    return (
        <div className={'chart-line'}>
            <Line data={chartData} options={options} height={80} />
        </div>
    );
};

export default MyLineChart;