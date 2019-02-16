import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  displayed = false; 
  allClicks = []; 
  count = 0; 

  isDisplayed() {
    this.displayed = !this.displayed
    this.count = this.count += 1
    this.allClicks.push(this.count)
  }

  getColor(){
    return (this.count > 5) ? 'blue' : 'clear'
  }
}
