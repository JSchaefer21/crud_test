import axios from "axios";
import { BookingStatus } from "../enums";

export async function editBooking(
  id: number,
  newDescription: string
): Promise<void> {
  await axios.patch(`http://localhost:3001/booking/${id}`, {
    status: BookingStatus.Edited,
    description: newDescription,
  });
}
