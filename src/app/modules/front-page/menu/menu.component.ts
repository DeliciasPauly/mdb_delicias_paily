import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  menuTabs(tab: string){
    // Declare all variables
    let i, tabcontent;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("carta");
    
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    if(tab=='tabs'){
      document.getElementById('tab1').style.display = "block"; 
      document.getElementById('tab2').style.display = "block";
      document.getElementById('tab3').style.display = "block";
    }else{
      document.getElementById(tab).style.display = "block";
    } 
    
  }

  
}
