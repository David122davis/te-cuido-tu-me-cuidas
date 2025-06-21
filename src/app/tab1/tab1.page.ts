
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonInput,
    IonItem,
    IonLabel
  ]
})
export class Tab1Page implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {
    const usuarioGuardado = localStorage.getItem('usuarioRegistrado');
    if (usuarioGuardado) {
      const datos = JSON.parse(usuarioGuardado);
      if (this.usuario === datos.usuario && this.contrasena === datos.contrasena) {
        this.router.navigate(['/home']);
        return;
      }
    }

    if (this.usuario === 'david' && this.contrasena === '1234') {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  registrar() {
    this.router.navigate(['/registro']);
  }
   emergencia() {
    alert(`🚨 ¡Emergencia activada!\n\n📞 Se está contactando con el 133 Carabineros de Chile\n📍 Su ubicación y la de su cita en fueron enviadas al número de emergencia registrado.`);
  }
}



