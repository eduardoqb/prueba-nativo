import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = '/api';

  constructor(private http: HttpClient) { }

  getListaTareas() {
    return this.http.get(this.url);
  }

  getTarea(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  createTarea(tarea: Tarea) {
    return this.http.post(this.url, tarea);
  }

  updateTarea(id: string | undefined, tarea: Tarea) {
    return this.http.put(this.url + "/update/" + id, tarea);
  }

  updateEstadoTarea(id: string | undefined){
    return this.http.put(this.url+"/status", {"id":id});
  }

}
