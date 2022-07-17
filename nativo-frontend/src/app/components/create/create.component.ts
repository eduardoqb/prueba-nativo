import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tarea: Tarea = {
    id: '',
    nombre: '',
    descripcion: '',
    creador: '',
    estado: 0
  };

  constructor(private router: Router, private tareaService: TareaService) { }

  ngOnInit(): void {
  }

  create() {
    delete this.tarea.id;

    this.tareaService.createTarea(this.tarea).subscribe();
    this.router.navigate(['/home']);
  }

}
