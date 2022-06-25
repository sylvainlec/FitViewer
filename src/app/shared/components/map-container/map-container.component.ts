import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { nothing } from 'ol/pixel';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  constructor() { }

  map: Map=nothing;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [-73.566723, 45.535284],
        zoom: 15,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
  }

}
