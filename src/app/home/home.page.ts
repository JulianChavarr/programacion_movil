import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  user: string = '';
  password: string = '';
  credenciales = false;


  async iniciarSesion() {

    if (this.user === 'Julian' && this.password === '123456') {

      this.credenciales = true;

      const alert = await this.alertController.create({

        message: 'Inicio de sesión exitoso',
        buttons: ['OK'],
        cssClass: 'success-alert'

      });
      await alert.present();

    } else {

      this.credenciales = false;

      const alert = await this.alertController.create({

        message: 'Usuario y/o contraseña incorrectos',
        buttons: ['OK'],
        cssClass: 'error-alert'

      });
      await alert.present();

    }
  }


  nombre: string = '';
  precio: number = 0;
  cantidad: number = 0;


  isChecked = false;
  disableButton = true;
  isShow = true;


  product = [
    { nombre: 'Mouse', precio: 15000, cantidad: 25 },
    { nombre: 'Teclado', precio: 30000, cantidad: 5 },
    { nombre: 'Pantalla', precio: 75000, cantidad: 0 },
    { nombre: 'Cámara', precio: 25000, cantidad: 1 },
    { nombre: 'Auriculares', precio: 13000, cantidad: 0 },
    { nombre: 'Mouse Pad', precio: 7500, cantidad: 5 },
    { nombre: 'Cable de Carga', precio: 35000, cantidad: 10 },
    { nombre: 'Mouse RGB', precio: 99999, cantidad: 0 },
    { nombre: 'Ventilador', precio: 28500, cantidad: 4 },
    { nombre: 'Tecla "A"', precio: 50, cantidad: 27 },
    { nombre: 'Tecla "B"', precio: 500000, cantidad: 3 },
    { nombre: 'Tecla "C"', precio: 500000, cantidad: 4 },
    { nombre: 'Mouse Inalámbrico', precio: 55000, cantidad: 3 },
    { nombre: 'Portatil', precio: 2500000, cantidad: 6 },
    { nombre: 'Torre', precio: 320000, cantidad: 5 },
    { nombre: 'Disco SSD', precio: 1800, cantidad: 32 },
    { nombre: 'Disco Duro', precio: 1200, cantidad: 30 },
    { nombre: 'Ram 4gb', precio: 16000, cantidad: 0 },
    { nombre: 'Ram 8gb', precio: 24000, cantidad: 2 },
    { nombre: 'Ram 16gb', precio: 32000, cantidad: 0 }
  ];


  people = [
    { name: 'Ashely', age: 19 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 12 },
    { name: 'Andres', age: 20 },
    { name: 'Paula', age: 18 },
    { name: 'Laura', age: 16 },
  ];


  constructor(private router: Router, private navCtrl: NavController, public alertController: AlertController) { }


  getRowClass(values: any) {
    if (values.precio >= 100000 && values.cantidad >= 1) {
      return 'cyan-row';
    } 
    if (values.precio > 0 && values.precio < 100000 && values.cantidad >= 1) {
      return 'green-row';
    } 
    if (values.cantidad <= 0) {
      return 'red-row';
    }
    return '';
  }

  getButtonColor() {
    return this.credenciales ? 'success' : 'danger';
  }


  isClicked: boolean[] = new Array(this.people.length).fill(false);

  toggleClicked(index: number) {
    this.isClicked[index] = !this.isClicked[index];
  }

  public showMessage() {
    alert('Se presionó el botón');
  }

  public clickCheck() {
    this.isChecked = !this.isChecked;
    this.disableButton = this.isChecked ? false : true;
  }

  public show() {
    this.isShow = !this.isShow;
  }

  public valuesDetail(values: any) {
    console.log(values);
  }

  public personDetail(person: any) {
    console.log(person);
  }


  goToDetailPage(itemId: number) {
    this.navCtrl.navigateForward('/detail', {
      queryParams: {
        itemId: itemId,
      },
    });


  }
}
