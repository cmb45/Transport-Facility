// Todo: Update the type of time later
export interface NewRideInfo{
    employeeId : string,
    vehicleType: VehicleType,
    vehicleNumber: string,
    vacantSeats: number,
    time:string,
    pickUpPoint:string,
    destination:string,
    bookedBy?: Array<string>
}

export enum NewRideEnum{
    EMPID = 'employeeId',
    VEHICLE_TYPE ='vehicleType',
    VEHICLE_NUMBER ='vehicleNumber',
    VEHICLE_SEAT = 'vacantSeats',
    TIME = 'time',
    PICKUP_POINT = 'pickUpPoint',
    DESTINATION = 'destination',
    BOOK_BY='bookedBy'
}

export enum VehicleType {
    BIKE = 'Bike',
    CAR = 'Car'
}