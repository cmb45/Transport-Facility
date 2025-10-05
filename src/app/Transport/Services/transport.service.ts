import { Injectable } from '@angular/core';
import { NewRideInfo, VehicleType } from '../Model/new-ride-model';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor() { }

  private _avilableRides : NewRideInfo[] = [
      {
        employeeId : 'emp1',
        vehicleType: VehicleType.CAR,
        vehicleNumber :"KA 01 LG 1234",
        vacantSeats: 3,
        time :'12:23',
        pickUpPoint: 'BTM Layout',
        destination :'Banashankari',
        bookedBy: []
      },
      {
        employeeId : 'emp2',
        vehicleType: VehicleType.BIKE,
        vehicleNumber :"KA 01 LG 5665",
        vacantSeats: 1,
        time :'01:23',
        pickUpPoint: 'BTM Layout',
        destination :'Silk Board',
        bookedBy: []
      },
      
      {
        employeeId : 'emp3',
        vehicleType: VehicleType.CAR,
        vehicleNumber :"KA 01 LG 2475",
        vacantSeats: 2,
        time :'02:45',
        pickUpPoint: 'BTM Layout',
        destination :'HSR Layout',
        bookedBy: []
      }
    ];

  public getAvailableRides(): NewRideInfo[]{
    return this._avilableRides;
  }

  public addNewRide(rideDetails : any){
    this._avilableRides.push(rideDetails);
  }
}
