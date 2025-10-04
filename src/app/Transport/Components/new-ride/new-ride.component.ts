import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { NewRideEnum, NewRideInfo, VehicleType } from '../../Model/new-ride-model';
import { TransportService } from '../../Services/transport.service';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {
  public newRideDetailsForm : any;
  public newRideFields =  NewRideEnum;

  constructor(private readonly _formBuilder: FormBuilder,
    private readonly _transportService :TransportService
  ){
  }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm():void{
      this.newRideDetailsForm = this._formBuilder.group({
          [NewRideEnum.EMPID] : ['', Validators.required],
          [NewRideEnum.VEHICLE_NUMBER]:['', Validators.required],
          [NewRideEnum.VEHICLE_TYPE]: [VehicleType.BIKE],
          [NewRideEnum.TIME]:['00:00',Validators.required],
          [NewRideEnum.VEHICLE_SEAT]: [0],
          [NewRideEnum.PICKUP_POINT]:['', Validators.required],
          [NewRideEnum.DESTINATION]:['', Validators.required]
      })
  };

  public onSubmit():void{
    const formDetails:NewRideInfo =  this.newRideDetailsForm.value;
    const details :Array<any> = this._transportService.getAvailableRides();
    const isEmpAlredyExists:boolean= details.some((det:any) => det?.employeeId === formDetails?.employeeId);
    if(isEmpAlredyExists){
      alert("Employee alredy present");
    }else{
      this._transportService.addNewRide(formDetails)
    }
  }


}
