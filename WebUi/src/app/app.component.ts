import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  jsonData:any[]=[];
  showCard = false;
  cardOneshow = false;
  cardTwoshow = false;
  footerOne = 'ArtBoard 1 Copy 2';
  footerTwo = 'ArtBoard 4';
  constructor() {
    this.jsonData= [
      {
          "text": "bootstrapalley",
          "icon": "",
          "expand": false,
          "show": false,
          "childrens":[]
  }]}
  cardOneClick() {
    this.jsonData.forEach(node =>{
      node['childrens'] = [];
      if(this.jsonData.length === 1){
       node['childrens']={
             "text": "bootstrapalley1",
             "icon": "",
             "expand": false,
             "show": false
       }
      }
   })
   this.cardOneshow = true;
   this.showCard = false;
  }
  cardTwoClick() {
    this.jsonData.forEach(node =>{
      if(this.jsonData.length === 1){
       node['childrens']={
             "text": "bootstrapalley2",
             "icon": "",
             "expand": false,
             "show": false
       }
      }
   })
   this.cardTwoshow = true;
   this.showCard = false;
  }
  getSelectedData(event:any) {
    this.showCard = true;


  }
}
