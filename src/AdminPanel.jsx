// AdminPanel.jsx
import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';

const AdminPanel = () => {
    const pieData = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }]
    };

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2],
            backgroundColor: '#FF6384',
        }]
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'User Growth',
            data: [2, 29, 5, 5, 20],
            fill: false,
            borderColor: '#36A2EB',
        }]
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <section>
                <h2>Pie Chart - Product Distribution</h2>
                <Pie data={pieData} />
            </section>
            <section>
                <h2>Bar Chart - Monthly Sales</h2>
                <Bar data={barData} />
            </section>
            <section>
                <h2>Line Chart - User Growth Over Time</h2>
                <Line data={lineData} />
            </section>
        </div>
    );
}

export default AdminPanel;
