import { TestBed } from '@angular/core/testing';

import { XmlParserService } from './xml-parser.service';

import { cameliseObject } from '../utils/cameliser';
import { FitbitTCX } from '../interfaces/fitbit-tcx';

describe('XmlParserService', () => {
  let service: XmlParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct obj from xml string', (done) => {
    const filePath = 'src/app/shared/services/fitbit_test1.tcx';
    const request: XMLHttpRequest = createRequest(filePath);
    request.onload = _ => {
      var textEncoder = new TextDecoder("utf-8",);
      const stringData=textEncoder.decode(request.response);
      const dataWithoutLineBreak=stringData.replace(/[\r\n]/gm, '');
      const parsedData=service.parseXMLString(dataWithoutLineBreak);
      const camelisedObj=cameliseObject(parsedData);
      const fitbitObj=<FitbitTCX>JSON.parse(JSON.stringify(camelisedObj));
      console.log(fitbitObj);


      expect(parsedData).toBeTruthy();
      expect(parsedData.TrainingCenterDatabase).toBeTruthy();
      done();
    };
    request.send();
  });


  function createRequest(filePath: string): XMLHttpRequest {
    const request = new XMLHttpRequest();
    request.open('GET', 'base/' + filePath, true);
    request.responseType = 'arraybuffer'; // maybe also 'text'
    return request;
};
});
