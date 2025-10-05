import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent {

  public bookingEmployeeId = new FormControl('', Validators.required);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly _dialogRef: MatDialogRef<BookRideComponent>
  ) {}

  public bookRide():void{
    this._dialogRef.close(this.bookingEmployeeId.value?.trim().toLowerCase());
  }

  public cancel():void{
    this._dialogRef.close();
  }

}
