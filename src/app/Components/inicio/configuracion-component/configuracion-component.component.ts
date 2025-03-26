import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  imports: [IonicModule],
  selector: 'app-configuracion-component',
  templateUrl: './configuracion-component.component.html',
  styleUrls: ['./configuracion-component.component.scss'],
})
export class ConfiguracionComponentComponent  implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
    
  }
  goToEdit() {
    this.router.navigate(['/conf']);
  }
}
