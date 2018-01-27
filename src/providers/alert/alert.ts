import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

    constructor(private _alertCtrl: AlertController) {
    }

    public showSuccessAlert(message: string): void {
        let successAlert = this._alertCtrl.create({
            buttons: ["Ok"],
            message: message,
            enableBackdropDismiss: false,
            title: "Success!"
        });

        successAlert.present();
    }

    public showErrorAlert(message: string): void {
        let errorAlert = this._alertCtrl.create({
            buttons: ["Ok"],
            message: message,
            enableBackdropDismiss: false,
            title: "Error!",
            subTitle: "An error occurred"
        });

        errorAlert.present();
    }

    public showPrompt(message: string, confirmHandler: (value: any) => boolean | void, cancelHandler: (value: any) => boolean | void): void {
        let promptAlert = this._alertCtrl.create({
            buttons: [{
                role: "confirm",
                handler: confirmHandler,
                text: "Confirm"
            }, {
                role: "cancel",
                handler: cancelHandler,
                text: "Cancel"
            }],
            message: message,
            enableBackdropDismiss: false,
            title: "Please confirm your action"
        });

        promptAlert.present();
    }

}
