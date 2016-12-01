import React from 'react';
import echarts from 'echarts';
let myData=[
  'html','css','js','react','node'
]
let num =[5, 20, 36, 10, 10]
class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
      title: {
                text: '我的技能展示',
                textStyle: {
                color: '#212121'
                }
            },

      color: ['#3398DB'],
      tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis : [
          {
              type : 'category',
              data : myData,
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'熟练度',
              type:'bar',
              barWidth: '60%',
              data:num
          }
      ]
    };

    myChart.setOption(option);
  }
  render () {
    return(
      <div id="main" style={{width: "100%",height:"auto",maxWidth:'600px',margin:'0 auto',}}>
        Work
      </div>
    )
  }
}

export default Work;
