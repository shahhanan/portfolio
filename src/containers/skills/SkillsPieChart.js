import React, { Component } from "react";
import Chart from "react-apexcharts";
class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: ['Javascript', 'Reactjs', 'Html', 'Css', 'Bootstrap', 'Node'],
        responsive: [{
          breakpoint: 500,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [30, 40, 30, 30, 30, 40],
    }
  }
  render() {
    return (
      <div id="technologesPieChart">
        <Chart options={this.state.options} series={this.state.series} type="pie" width="380" />
      </div>
    )
  }
}
export default PieChart;