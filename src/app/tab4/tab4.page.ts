import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem
  ],
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss']
})
export class Tab4Page implements OnInit {
  persona1 = ' ';
  persona2 = 'David';
  firmado = false;
  fecha = '';

  ngOnInit() {
    // Obtener usuario registrado de tab1
    const datos = localStorage.getItem('usuarioRegistrado');
    if (datos) {
      try {
        const obj = JSON.parse(datos);
        this.persona1 = obj.usuario || '';
      } catch (e) {
        console.error('Error al leer usuarioRegistrado', e);
      }
    }

    // Obtener nombre de la cita de tab2
    const cita = localStorage.getItem('citaNombre');
    if (cita) {
      this.persona2 = cita;
    }
  }

  firmar() {
    if (this.persona1.trim() && this.persona2.trim()) {
      this.fecha = new Date().toLocaleString();
      this.firmado = true;
    } else {
      alert('Ambas personas deben estar identificadas para firmar.');
    }
  }

  emergencia() {
    alert(`🚨 ¡Emergencia activada!\n\n📞 Se está contactando con el 133 Carabineros de Chile\n📍 La ubicación de la cita en "Clínica Central" fue enviada al número de emergencia registrado.`);
  }
}
