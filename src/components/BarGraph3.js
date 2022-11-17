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
  
  function BarGraph3({props,props2}) {
      const state = {
          labels: [`Medical Clinic`,`Dispensary`,`Hospitals`,`Medical Centre`,`Health Centre`,`Nursing Home`,`Stand Alone`],
          datasets: [
              {
                  label: 'FACILITIES TYPES',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: [props,props2,props,props2,props,props2,props],
              }
          ]
      }
      
  
  return <Bar
  data={state}
  options={{
      title:{
          display:true,
          text:'FACILITIES TYPES',
          fontSize:20
      },
      legend:{
          display:true,
          position:'right'
      }
  }}
  style={{width:'20px',height:'20px'}}/>;
  }
export default BarGraph3;