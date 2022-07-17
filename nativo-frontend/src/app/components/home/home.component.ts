import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaTareas: Tarea[] = [];
  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.tareaService.getListaTareas().subscribe({
      next: (res) => {
        console.log(res);
        this.listaTareas = <any>res;
      },
      error: (err) => console.log(err)
    })
  }

  getClass(estado: any) {
    if (estado !== undefined) {
      return {
        'btn-danger': estado == 1,
        'btn-success': estado == 0
      }
    }else{
      return '';
    }
  }

  update(id?: string) {
    this.router.navigate(['/update/' + id]);
  }

  cambiarEstado(id: any){
    this.tareaService.updateEstadoTarea(id).subscribe({
      next: (res)=>{
        this.list();
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

}
