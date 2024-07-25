import { Injectable } from '@angular/core';
import { Profesional } from '../models/profesional';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  private url = "http://localhost:3000/profesionales";

  constructor(private http: HttpClient) {}

  public get(profesional: any) {
    let params = new HttpParams();
    if (profesional.nombre) {
      params = params.set('nombre', profesional.nombre);
    }
    if (profesional.apellido) {
      params = params.set('apellido', profesional.apellido);
    }

    return this.http.get(this.url, { params });
  }

  public post(profesional: Profesional) {
    return this.http.post(this.url, profesional);
  };

  public put(profesional: Profesional) {
    return this.http.put(this.url, profesional);
  };

  public delete(profesional: Profesional) {
    return this.http.delete(this.url, {body: profesional});
  };

}
