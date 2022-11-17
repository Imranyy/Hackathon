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

function BarChart({props,props2}) {
    const state = {
        labels: [`${localStorage.getItem('County')} County Facilities`,`${localStorage.getItem('County')} CHU`],
        datasets: [
            {
                label: 'FACILITIES & CHUS BY COUNTY',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [props,props2],
            }
        ]
    }
    

return <Bar
data={state}
options={{
    title:{
        display:true,
        text:'FACILITIES & CHUS BY COUNTY',
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