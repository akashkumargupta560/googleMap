import { Component } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
 constructor(){}

 lat = 51.678418;
  lng = 7.809007;
 ngOnInit():void{}
}
