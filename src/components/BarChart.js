import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function BarChart() {
    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May','June','July','August','September','October','November','December'],
        datasets: [
            {
                label: 'Average Salary Amount USD($)',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [34, 65, 78, 89, 35,56,66,84,21,67,87,78],
            }
        ]
    }
    

return <Bar
data={state}
options={{
    title:{
        display:true,
        text:'Average Employee Salary per Month',
        fontSize:20
    },
    legend:{
        display:true,
        position:'right'
    }
}}
style={{width:'20px',height:'20px'}}/>;
}
export default BarChart;