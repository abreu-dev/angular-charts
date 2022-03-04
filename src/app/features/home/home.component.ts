import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public title: string;
  public isDisplayingNgxCharts: boolean;
  public isDisplayingChartJs: boolean;

  constructor() {
    this.displayNgxCharts();
  }

  public displayNgxCharts(): void {
    this.title = 'NGX Charts';
    this.isDisplayingNgxCharts = true;
    this.isDisplayingChartJs = false;
  }

  public displayChartJs(): void {
    this.title = 'Chart JS';
    this.isDisplayingChartJs = true;
    this.isDisplayingNgxCharts = false;
  }
}
