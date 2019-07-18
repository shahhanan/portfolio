import React, { Component } from "react";
import Chart from "react-apexcharts";

class SkillsHorizontalBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
              plotOptions: {
                bar: {
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['Javascript', 'Reactjs', 'Html5', 'Css3', 'Bootstrap', 'Node'],
              }
            },
            series: [{
              data: [80, 80, 100, 70, 65, 60]
            }],
          }
      }
      render() {
        return (
          <div id="technologesBarChart">
            <Chart options={this.state.options} series={this.state.series} type="bar" width="400" />
          </div>
        )
      }
}

export default SkillsHorizontalBarChart;
