import Chart from 'echarts-for-react'
import { ChartInterface } from '../../../../interfaces/DashboardInterfaces';


interface HDChartInterface {
     data:ChartInterface[]
}

const HDChart = ({data}: HDChartInterface) => {

     

     //static because I didnt know if there will be more charts or not
     const option = {
          xAxis: {
               type: 'category',
               data: data.map(value => new Date(value['workoutDay']).toLocaleTimeString('fa-Fa', {day: 'numeric'})),
               boundaryGap: false,
               show: false
          },
          yAxis: {
               type: 'value',
               show: false
          },
          series: [
               {
                    name: 'ctl',
                    data: data.map(value => value['ctl']),
                    type: 'line',
                    smooth: true,
                    color: 'rgba(223, 32, 99, 1)',
                    areaStyle: {
                         color: 'rgba(223, 32, 99, 1)'
                    },
                    lineStyle: {
                         width: 0
                    },
                    showSymbol: false,
               }
          ],
          tooltip: {
               trigger: 'axis',
               axisPointer: {
                    type: 'none',
                    label: {
                         show: false
                    },
               },

          },
          dataZoom: [{
               type: 'inside',
               moveOnMouseWheel: false
          }]
     };


     return (
          <>
               <Chart option={option} notMerge lazyUpdate />
          </>
     )
}

export default HDChart;