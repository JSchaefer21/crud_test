import axios from "axios";
import { Booking } from "../types";

export async function getBookings(): Promise<Booking[]> {
  const response = await axios.get<Booking[]>("http://localhost:3001/booking");
  return response.data;
}
