import { Component, OnInit, ViewChild } from '@angular/core';
import { TransportService } from '../../Services/transport.service';
import { NewRideEnum, NewRideInfo, VehicleType } from '../../Model/new-ride-model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookRideComponent } from '../book-ride/book-ride.component';

@Component({
  selector: 'app-available-rides',
  templateUrl: './available-rides.component.html',
  styleUrls: ['./available-rides.component.css']
})
export class AvailableRidesComponent implements OnInit{

  public dataSource:any;
  public displayColumns : Array<string> = Object.values(NewRideEnum);
  public vehicleType = new FormControl('');
  public filterSearch = new FormControl('');
  @ViewChild('paginator', {static : true}) paginator: MatPaginator | undefined;
  
  constructor(
    private readonly _transportService : TransportService,
    private readonly _router: Router,
    public readonly _dialog: MatDialog
  ){}


  private _getAllAvailableRides(): NewRideInfo[] {
      return this._transportService.getAvailableRides();
  }
  
  public ngOnInit(): void {
    const data:Array<any> = this._getAllAvailableRides();
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

  public bookRide(row: any):void{
    this._dialog.open(BookRideComponent, {
      width : '500px',
      height : '200px'
    }).afterClosed().subscribe((employeeId:string) =>{
      if(employeeId){
        this._confirmRide(row, employeeId);
      }
    })
  }

  private _confirmRide(selectedRideDetails:any, employeeId :string){
    const details:NewRideInfo[] = this._getAllAvailableRides().map((rideDetail:any) =>{
        if(rideDetail?.[NewRideEnum.EMPID] === selectedRideDetails?.[NewRideEnum.EMPID]){
          if(!rideDetail?.[NewRideEnum.BOOK_BY].includes(employeeId)){
            rideDetail?.[NewRideEnum.BOOK_BY].push(employeeId);
            if(rideDetail.vacantSeats){
              rideDetail.vacantSeats = rideDetail.vacantSeats - 1;
            }
          }else{
              alert("Employee alredy present");
          }
        };
        return rideDetail;
    });
    this.dataSource = new MatTableDataSource(details)
  }

  public disableBookNowButton(element:any):boolean{
    return element?.[NewRideEnum.VEHICLE_SEAT] === 0 ? true : false;
  }


}
