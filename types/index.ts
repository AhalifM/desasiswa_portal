export interface Room {
  _id: string;
  roomNumber: string;
  capacity: number;
  isOccupied: boolean;
}

export interface Student {
  _id: string;
  name: string;
  email: string;
  roomId: string;
}

export interface Booking {
  _id: string;
  studentId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string | null;
}
