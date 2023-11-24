import { Component, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  @ViewChild('popover') popover;

  isOpen = false;

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit(){

  }

  async mostrarPop(){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent
    });
    await popover.present();
  }
}
