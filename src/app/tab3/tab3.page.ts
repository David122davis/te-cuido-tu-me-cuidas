import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  ],
})
export class Tab3Page {
  editando: boolean = false;

  usuario = {
    nombre: 'xxx',
    apellidos: 'xx xx',
    edad: 30,
    correo: 'xx@uniacc.com',
    telefono: '912345678',
    direccion: 'Av. Providencia 123',
    descripcion: 'Describa sus características personales, para que su cita pueda conocerla mejor.'
  };

  modificarDatos() {
    this.editando = true;
  }

  guardarDatos() {
    this.editando = false;
    alert('Sus datos fueron guardados correctamente.');
  }
}
