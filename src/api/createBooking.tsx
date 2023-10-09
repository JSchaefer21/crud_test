import axios from "axios";
import { BookingStatus } from "../enums";

export async function createBooking(): Promise<void> {
  const newBooking = {
    status: BookingStatus.Created,
    createdAt: new Date(),
    deletedAt: undefined,
    description: "",
  };

  await axios.post("http://localhost:3001/booking", newBooking);
}
