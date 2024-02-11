import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  imageUrl:string='';
  showModel(Url:string){
    this.imageUrl = Url;
    return this.imageUrl;
  }

  closeModel(){
    this.imageUrl = ''
  }



}
