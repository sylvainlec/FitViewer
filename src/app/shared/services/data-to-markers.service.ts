import { Injectable } from '@angular/core';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import { FitbitTCX } from '../interfaces/fitbit-tcx';

@Injectable({
  providedIn: 'root'
})
export class DataToMarkersService {

  transform(trainingData:FitbitTCX):Feature[]{
    return trainingData.trainingCenterDatabase.activities.activity.lap.track.map(dataPoint=>{
      const marker = new Feature(
        new Point(fromLonLat([dataPoint.position.longitudeDegrees,dataPoint.position.latitudeDegrees]))
        );
      return marker;
    });
  }
}
