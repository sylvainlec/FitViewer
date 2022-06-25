import { Injectable } from '@angular/core';

import Map from 'ol/Map';
import Feature from 'ol/Feature';
import {Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';

@Injectable({
  providedIn: 'root'
})
export class MarkersAdderService {
  LAYER_NAME_KEY='name';

  constructor() { }

  addMarkerOnMap(map:Map,layerName:string, markers:Array<Feature>):void{
    this.removeLayerInMapWithName(map,layerName);

    const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: markers
        })
      });

      vectorLayer.set(this.LAYER_NAME_KEY, layerName);
      map.addLayer(vectorLayer);
  }

  removeLayerInMapWithName(map:Map,layerToRemove:string):void{
    map.getLayers().forEach(layer => {
      if (layer && layer.get(this.LAYER_NAME_KEY) === layerToRemove) {
        map.removeLayer(layer);
      }
    });
  }
}


