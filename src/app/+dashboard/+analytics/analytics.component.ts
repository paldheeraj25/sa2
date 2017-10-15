import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent implements OnInit {

  lastWeek: Object;
  thisYear: Object;
  constructor() { 
    this.lastWeek = {
          chart: {
              type: 'column',
              height: 400,
              width: 500
          },
          title: {
              text: 'Taps for last 7 Days'
          },
          subtitle: {
              text: 'Resize the frame or click buttons to change appearance'
          },
          legend: {
              align: 'right',
              verticalAlign: 'middle',
              layout: 'vertical'
          },
          xAxis: {
              categories: ['16 Oct', '17 Oct', '18 Oct', '19 Oct', '20 Oct', '21 Oct', '22 Oct'],
              labels: {
                  x: -10
              }
          },
          yAxis: {
              allowDecimals: false,
              title: {
                  text: 'Amount'
              }
          },
          series: [{
              name: 'Taps',
              data: [1000, 4000, 3000, 7500, 8000, 9000, 9999]
          }],
          responsive: {
              rules: [{
                  condition: {
                      maxWidth: 500
                  },
                  chartOptions: {
                      legend: {
                          align: 'center',
                          verticalAlign: 'bottom',
                          layout: 'horizontal'
                      },
                      yAxis: {
                          labels: {
                              align: 'left',
                              x: 0,
                              y: -5
                          },
                          title: {
                              text: null
                          }
                      },
                      subtitle: {
                          text: null
                      },
                      credits: {
                          enabled: false
                      }
                  }
              }]
          }
      };

      this.thisYear = {

        chart: {
          type: 'column',
          height: 400,
          width: 500
      },
      title: {
          text: 'Taps for Current year'
      },
      subtitle: {
          text: 'Resize the frame or click buttons to change appearance'
      },
      legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Oct', 'Nov', 'Dec'],
          labels: {
              x: -10
          }
      },
      yAxis: {
          allowDecimals: false,
          title: {
              text: 'Amount'
          }
      },
      series: [{
          name: 'Taps',
          data: [100000, 400000, 350000, 700500, 108000, 900050, 999900, 100020, 200012, 201021, 123110, 400050, 500035]
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      align: 'center',
                      verticalAlign: 'bottom',
                      layout: 'horizontal'
                  },
                  yAxis: {
                      labels: {
                          align: 'left',
                          x: 0,
                          y: -5
                      },
                      title: {
                          text: null
                      }
                  },
                  subtitle: {
                      text: null
                  },
                  credits: {
                      enabled: false
                  }
              }
          }]
      }
    };
  }

  ngOnInit() {
    
  }

}
