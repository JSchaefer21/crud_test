import axios from "axios";
import { BookingStatus } from "../enums";

export async function deleteBooking(id: number): Promise<void> {
  await axios.patch(`http://localhost:3001/booking/${id}`, {
    status: BookingStatus.Deleted,
    deletedAt: new Date(),
  });
}
