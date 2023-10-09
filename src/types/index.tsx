import { BookingStatus } from "../enums";

export type Booking = {
  id: number;
  status: BookingStatus;
  createdAt: Date;
  deletedAt: Date | undefined;
  description: string;
};
