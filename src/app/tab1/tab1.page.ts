import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController, private actionSheetCtrl: ActionSheetController, private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'INFO',
      subHeader: 'Guardado',
      message: 'Sus cambios se han guardado con exito',
      buttons: ['Ok'],
    });

    await alert.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Educación',
      buttons: [
        {
          text: 'Bachillerato General Unificado',
          role: 'destructive',
        },
        {
          text: 'Tecnologia Superior en Desarrollo de software',
          handler: () => {
            // Lógica para manejar la acción de compartir
          }
        },
        
      ]
    });
  
    await actionSheet.present();
  }
  
}


