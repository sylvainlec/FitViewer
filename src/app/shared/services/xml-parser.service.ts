import { Injectable } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class XmlParserService {
  xmlParser:DOMParser;

  constructor(private ngxXml2jsonService: NgxXml2jsonService) {
  this.xmlParser=new DOMParser();  
  }

  parseXMLString(data:string):any {  
      const xml = this.xmlParser.parseFromString(data, 'text/xml');
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      return obj;
  }  
}
