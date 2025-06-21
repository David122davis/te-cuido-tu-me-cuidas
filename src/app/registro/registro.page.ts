import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
  IonList,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
    IonList,
    IonButton
  ]
})
export class RegistroPage {
  nombre = '';
  edad: number | null = null;
  correo = '';
  telefono = '';
  direccion = '';
  usuario = '';
  contrasena = '';

  constructor(private router: Router) {}

  registrarUsuario() {
    if (this.usuario && this.contrasena) {
      // Guardamos temporalmente en localStorage
      const nuevoUsuario = {
        nombre: this.nombre,
        edad: this.edad,
        correo: this.correo,
        telefono: this.telefono,
        direccion: this.direccion,
        usuario: this.usuario,
        contrasena: this.contrasena
      };

      localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario));
      alert('¡Usuario registrado con éxito!');
      this.router.navigate(['/']);
    } else {
      alert('Debes ingresar un usuario y contraseña.');
    }
  }
}
