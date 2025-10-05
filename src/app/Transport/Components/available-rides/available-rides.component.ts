import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class AvailableRidesComponent implements OnInit, AfterViewInit{

  public dataSource:any;
  public displayColumns : Array<string> = Object.values(NewRideEnum);
  public vehicleType = new FormControl('');
  public filterSearch = new FormControl('00:00');
  @ViewChild('paginator') paginator: MatPaginator | undefined;
  
  constructor(
    private readonly _transportService : TransportService,
    private readonly _router: Router,
    public readonly _dialog: MatDialog
  ){}


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private _getAllAvailableRides(): NewRideInfo[] {
      return this._transportService.getAvailableRides();
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
  
  public ngOnInit(): void {
    const data: NewRideInfo[] = this._getAllAvailableRides();
    this.dataSource = new MatTableDataSource(data);
    this.filterSearch.valueChanges.subscribe((value:any) => {
        this._filterRidesOnTime(value);
    });
  }

  private _filterRidesOnTime(selectedTime:string):void{
    const buffer:number = 60;
    const tableData :  NewRideInfo[] = this._getAllAvailableRides();
    const res:any = tableData.filter((ride:any) => {
      let isWithinRange:boolean = true;

      if (selectedTime != "00:00") {
        const [searchHour, searchMin] = selectedTime.split(':').map(Number);
        const searchMinutes = searchHour * 60 + searchMin;

        const [rideH, rideM] = ride?.[NewRideEnum.TIME]?.split(':').map(Number);
        const rideMinutes = rideH * 60 + rideM;

        const diff:number = Math.abs(rideMinutes - searchMinutes);
        isWithinRange = diff <= buffer;
      }

      const isVehicleMatch:boolean = this.vehicleType.value ? ride.vehicleType === this.vehicleType.value : true;

      return  isVehicleMatch && isWithinRange;
    });
    this.dataSource.data = [...res];
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

}
