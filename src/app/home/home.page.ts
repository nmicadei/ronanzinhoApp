import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  page;
  perPage;
  data;
  totalPage;
  total;

  constructor(private api: ApiService) {this.buscarTodos();}

  buscarTodos(page= 1){
    this.api.buscarUsuarios(page).subscribe(usuarios=>{
      console.log(usuarios);
      this.page=usuarios['page'];
      this.perPage=usuarios['per_page'];
      this.data=usuarios['data'];
      this.total=usuarios['total'];
      this.totalPage=usuarios['total_page'];
    });
  }

}
