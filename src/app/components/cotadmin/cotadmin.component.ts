import { Component, OnInit } from '@angular/core';
import { AstraDBService } from 'src/app/data/astra/AstraDBService';


@Component({
  selector: 'app-cotadmin',
  templateUrl: './cotadmin.component.html',
  styleUrls: ['./cotadmin.component.css']
})
export class CotadminComponent implements OnInit {
 // constructor(private astraDBService: AstraDBService) {}
  ngOnInit(): void {
   
   // this.astradb.test();
  //  this.createCollection();
  //  this.insertDocuments();
  //  this.updateDocument();
  //  this.findDocument();
  }
  
  // async createCollection(): Promise<void> {
  //   await this.astraDBService.createCollection();
  // }

  // async insertDocuments(): Promise<void> {
  //   await this.astraDBService.insertDocuments();
  // }

  // async updateDocument(): Promise<void> {
  //   await this.astraDBService.updateDocument();
  // }

  // async findDocument(): Promise<void> {
  //   await this.astraDBService.findDocument();
  // }
}
