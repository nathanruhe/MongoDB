import { Component } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';
import { Respuesta } from 'src/app/models/respuesta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesionalService } from 'src/app/shared/profesional.service';

@Component({
  selector: 'app-profesionals',
  templateUrl: './profesionals.component.html',
  styleUrls: ['./profesionals.component.css']
})
export class ProfesionalsComponent {

  public myForm: FormGroup;
  public myProf: Profesional[] = [];
  public mensaje: boolean = false; 

  constructor(private formBuilder: FormBuilder, private profesionalService: ProfesionalService) {

    this.myForm = this.formBuilder.group({
      nombre: [],
      apellido: [],
      edad: [],
      peso: [],
      altura: [],
      retirado: [],
      nacionalidad: [],
      oscars: [],
      profesion: [],
    });
  }

  mostrar() {
    const profesional = this.myForm.value;

    this.profesionalService.get(profesional).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        console.log(resp);
        this.myProf = resp.data;
        this.mensaje = false;
      } else {
        console.log(resp);
        this.myProf = [];
        this.mensaje = true;
      }
    });
    this.myForm.reset();
}

  crear() {
    const profesional = this.myForm.value;

    this.profesionalService.post(profesional).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        console.log(resp);
      } else {
        console.log(resp);
      };
    });
    this.myForm.reset();
  }

  modificar() {
    const profesional = this.myForm.value;

    this.profesionalService.put(profesional).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        console.log(resp);
      } else {
        console.log(resp);
      };
    });
    this.myForm.reset();
  }

  eliminar() {
    const profesional = this.myForm.value;

    this.profesionalService.delete(profesional).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        console.log(resp);
      } else {
        console.log(resp);
      };
    });
    this.myForm.reset();
  }


}
