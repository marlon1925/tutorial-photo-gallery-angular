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
      subHeader: 'BSC',
      message: 'Hola Como estas',
      buttons: ['Close'],
    });

    await alert.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Hojas de vida',
      buttons: [
        {
          text: 'Marlon',
          role: 'destructive',
          handler: () => {
            this.router.navigateByUrl('/tab')
          }
        },
        {
          text: 'Josue',
          handler: () => {
            // Lógica para manejar la acción de compartir
          }
        },
        {
          text: 'Wilson',
          role: 'cancel',
          handler: () => {
            // Lógica para manejar la acción de cancelar
          }
        }
      ]
    });
  
    await actionSheet.present();
  }
  
}


