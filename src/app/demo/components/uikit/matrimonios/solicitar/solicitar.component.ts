import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinciasService } from 'src/app/demo/service/provincias.service';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss']
})
export class SolicitarComponent implements OnInit {

  provincias: any[] = [];



  filteredProvincias: any[] = [];

  value1: any;

  value2: any;

  value3: any;

  value4: any;

  value5: any;

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any;

  value12: any;

  constructor(private provinciasService: ProvinciasService, private router: Router) {
  
}
ngOnInit() {
  this.provinciasService.getProvincias().then(provincias => {
      this.provincias = provincias;
  });
}

searchProvincias(event: any) {
  // in a real application, make a request to a remote url with the query and
  // return filtered results, for demo we filter at client side
  const filtered: any[] = [];
  const query = event.query;
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.provincias.length; i++) {
      const provincias = this.provincias[i];
      if (provincias.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(provincias);
      }
  }

  this. filteredProvincias = filtered;
}
cancelar(){
  this.router.navigate(['dashboard/uikit/matrimonios'])
}
}




