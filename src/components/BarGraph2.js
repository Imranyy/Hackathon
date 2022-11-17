import React from 'react';
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
  
  function BarGraph2({props,props2}) {
      const state = {
          labels: [`Private Practice`,`Non-Governmental organisations`,`Ministry of Health`,`Faith Based Organisation`],
          datasets: [
              {
                  label: 'FACILITIES OWNERS',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: [props,props2,props,props2],
              }
          ]
      }
      
  
  return <Bar
  data={state}
  options={{
      title:{
          display:true,
          text:'FACILITIES OWNERS',
          fontSize:20
      },
      legend:{
          display:true,
          position:'right'
      }
  }}
  style={{width:'20px',height:'20px'}}/>;
  }

export default BarGraph2;