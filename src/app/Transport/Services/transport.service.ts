import { Injectable } from '@angular/core';
import { NewRideInfo, VehicleType } from '../Model/new-ride-model';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor() { }

  public getAvailableRides(): NewRideInfo[]{
    return [
      {
        employeeId : 'emp1',
        vehicleType: VehicleType.CAR,
        vehicleNumber :"KA 01 LG 1234",
        vacantSeats: 3,
        time :'',
        pickUpPoint: 'BTM Layout',
        destination :'Banashankari'
      },
      {
        employeeId : 'emp2',
        vehicleType: VehicleType.BIKE,
        vehicleNumber :"KA 01 LG 5665",
        vacantSeats: 1,
        time :'',
        pickUpPoint: 'BTM Layout',
        destination :'Silk Board'
      },
      
      {
        employeeId : 'emp3',
        vehicleType: VehicleType.CAR,
        vehicleNumber :"KA 01 LG 2475",
        vacantSeats: 2,
        time :'',
        pickUpPoint: 'BTM Layout',
        destination :'HSR Layout'
      }
    ]
  }
}
