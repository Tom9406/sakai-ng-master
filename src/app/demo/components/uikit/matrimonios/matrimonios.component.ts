import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { time } from 'console';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-matrimonios',
  templateUrl: './matrimonios.component.html',
  styleUrls: ['./matrimonios.component.scss']
})
export class MatrimoniosComponent {
 
     constructor( private router: Router){}   
    
    inscribir_matrimonio(){
      console.log("entrando en inscribir");
      this.router.navigate(['dashboard/uikit/matrimonios/inscribir']); 
     
    }

}


