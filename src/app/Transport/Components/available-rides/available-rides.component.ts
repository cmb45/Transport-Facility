import { Component, OnInit, ViewChild } from '@angular/core';
import { TransportService } from '../../Services/transport.service';
import { NewRideEnum } from '../../Model/new-ride-model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-available-rides',
  templateUrl: './available-rides.component.html',
  styleUrls: ['./available-rides.component.css']
})
export class AvailableRidesComponent implements OnInit{

  public dataSource:any;
    public displayColumns : Array<string> = Object.values(NewRideEnum);
  // public displayColumns : Array<string> = Object.values(NewRideEnum).filter(col => col !== NewRideEnum.TIME);
  public vehicleType = new FormControl('');
  public filterSearch = new FormControl('');
  @ViewChild('paginator', {static : true}) paginator: MatPaginator | undefined;
  constructor(
    private readonly _transportService : TransportService,
    private readonly _router: Router
  ){

  }
  
  public ngOnInit(): void {
    const data:Array<any> = this._transportService.getAvailableRides();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.filterSearch.valueChanges.subscribe(value => {
      this.dataSource.filter = value?.trim().toLowerCase() || '';
    });
  }

  public newRide():void{
    this._router.navigate(['rides/newRide']);
  }

  public onVehicleTypeChange(selectedValue:string):void{
     this.dataSource.filter = selectedValue.trim().toLowerCase();
  }
}
