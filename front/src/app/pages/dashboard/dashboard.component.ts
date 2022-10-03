import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent<T> implements OnInit {

  constructor() {
    setTimeout(() => {
      console.log("I'm huy");
    }, 100);
  }

  ngOnInit(): void {
    console.log(
      this.test('Hello', 'Peter'),
      this.getData(true),
      this.getData(123),
    );
  }

  test(action: string, name: string): string {
    return `${action} ${name}`;
  }

  getData<T>(value: T): T {
    return value;
  }

}
