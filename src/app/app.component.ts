import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParert = '';
  showImage = true;


  onLoaded(img:string) {
    console.log('logPadre', img);
    
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
