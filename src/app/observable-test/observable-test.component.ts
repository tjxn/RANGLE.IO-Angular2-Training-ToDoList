import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TestService } from './observable-test.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent {

  constructor(private testService: TestService) {
    this.testService.getObservable()
    //.debounceTime(1000)
    .filter(x => x > 300)
      .subscribe(response => {
        console.log(response);
      });

    this.testService.start();

    setTimeout(() => {
      this.testService.stop();
    }, 10000);
  }

}
