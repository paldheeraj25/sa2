import { Component, OnInit } from '@angular/core';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Chart } from 'angular-highcharts';

@FadeInTop()
@Component({
  selector: 'sa-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {

  lastWeek: Object;
  thisYear: Object;
  public monthlyTapchart: any;
  public weeklyTapchart: any;


  constructor() {

    //hardcoded data for monthly tapped chart
    this.monthlyTapchart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Average Taps'
      },
      subtitle: {
        text: 'Source: Lewiot App'
      },
      colors: [
        '#90caed',
        '#ff6b8c'
      ],
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        crosshair: true
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Genuine Taps',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

      },
      {
        name: 'Tampered/Counterfieted Taps',
        data: [-39.9, -11.5, -86.4, -99.2, -4.0, -46.0, -35.6, -48.5, -96.4, -94.1, -25.6, -14.4]

      }]
    });

    //hardcoded data for weekly tapped chart
    this.weeklyTapchart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Weekly Average Taps'
      },
      colors: [
        '#90caed',
        '#ff6b8c'
      ],
      xAxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Genuine',
        data: [5, 3, 4, 7, 2, 8, 6]
      }, {
        name: 'Tampered/Counterfieted',
        data: [-1, -2, -3, -2, -7, -5, -8]
      }]
    });
  }


  ngOnInit() {

  }

}
