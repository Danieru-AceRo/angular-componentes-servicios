import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img:string = ''

  @Input('img') 
  set changeImg(newImg: string){
    this.img =  newImg;
    console.log('change just the image', this.img)
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>()
  
  imageDefault = '../../../assets/img/default-image.jpg';
  // counter = 0;
  // counterFunction: number | undefined;

  constructor() {
    // before render
    // No async -- once time
    console.log('constructor', 'imageValue =', this.img); 
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - during render
    // changes inputs ..multiples times
    console.log('ngOnChanges', 'imageValue =', this.img);
    console.log('changes', changes);
    
  }
   

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imageValue =', this.img);
  //  this.counterFunction = window.setInterval(() => {
  //     this.counter ++;
  //     console.log('run counter')
  //   }, 1000)
  }

  ngAfterViewInit(){
    // after render
    // async - fetch -- once time
    console.log('ngOnInit');
  }

  ngOnDestroy(){
    // delete -- once time
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFunction)
  }

  imgError(){
    this.img = this.imageDefault
  }

  imageLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img)
  }
}
