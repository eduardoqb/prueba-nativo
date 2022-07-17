import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { Tarea } from '../../models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  tarea: Tarea = {
    id: '',
    nombre: '',
    descripcion: '',
    creador: '',
    estado: 0
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
    const id_tarea = <string>this.activatedRoute.snapshot.params["id"];
    console.log("Id de entrada: "+id_tarea);

    if(id_tarea){
      this.tareaService.getTarea(id_tarea).subscribe({
        next: (res: any) => {
          console.log(res[0]);
          this.tarea = res[0];
        },
        error: (err: any) => console.error(err)
      }
      );
    }
  }

  update() {
    this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{
        console.log(err);
      }
    });
    this.router.navigate(['/home']);
  }

}
