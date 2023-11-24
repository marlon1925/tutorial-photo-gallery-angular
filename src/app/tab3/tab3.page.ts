import { Component, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
