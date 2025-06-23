
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ExploreContainerComponent],
})
export class HomePage {
  citaDatos = {
    nombre: 'Rosalba Maldonado',
    fecha: '2025-06-20',
    hora: '10:00 AM',
    lugar: 'Clínica Central'
  };

  horaInicio: Date | null = null;

  constructor(private router: Router) {}

  onClick(action: string) {
    if (action === 'Conocer datos de mi cita') {
      this.router.navigate(['/tabs/tab2']);
    }
  }

  regresarHome() {
    this.router.navigate(['/tabs/tab1']);
  }

  comenzarCita() {
    this.horaInicio = new Date();
    alert(`✅ Cita iniciada\n\n👤 Nombre de la cita: ${this.citaDatos.nombre}\n📅 Fecha: ${this.citaDatos.fecha}\n🕒 Hora: ${this.citaDatos.hora}`);
  }

  finalizarCita() {
    if (!this.horaInicio) {
      alert('Primero debes iniciar la cita');
      return;
    }

    const horaFin = new Date();
    const tiempoMs = horaFin.getTime() - this.horaInicio.getTime();
    const minutos = Math.floor(tiempoMs / 60000);
    const segundos = Math.floor((tiempoMs % 60000) / 1000);

    alert(`🛑 Tu cita a finalizado con exito\n\n Duración total: ${minutos} min ${segundos} seg\n\n Gracias por utilizar "Yo te Cuido Tú Me Cuidas"`);
    this.horaInicio = null; // Reiniciamos para la próxima cita
  }
  DatosPersonales() {
    this.router.navigate(['/tabs/tab3']);
  }
irAFirma() {
  this.router.navigate(['/tabs/tab4']);
}
  emergencia() {
    alert(`🚨 ¡Emergencia activada!\n\n📞 Se está contactando con el 133 Carabineros de Chile\n📍 Su ubicación y la de su cita en "${this.citaDatos.lugar}" fueron enviadas al número de emergencia registrado.`);
  }
}
