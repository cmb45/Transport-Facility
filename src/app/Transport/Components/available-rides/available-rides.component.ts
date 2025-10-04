import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../Services/transport.service';
import { NewRideEnum } from '../../Model/new-ride-model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-rides',
  templateUrl: './available-rides.component.html',
  styleUrls: ['./available-rides.component.css']
})
export class AvailableRidesComponent implements OnInit{

  public dataSource:any;
  public displayColumns : Array<string> = Object.values(NewRideEnum).filter(col => col !== NewRideEnum.TIME);

  constructor(
    private readonly _transportService : TransportService,
    private readonly _router: Router
  ){

  }
  
  public ngOnInit(): void {
    const data:Array<any> = this._transportService.getAvailableRides();
    this.dataSource = new MatTableDataSource(data);
  }

  public newRide():void{
    this._router.navigate(['rides/newRide']);
  }
}
