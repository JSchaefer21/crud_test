import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { Booking } from "./types";
import "./styles/App.css";
import { getBookings } from "./api/getBookings";
import { deleteBooking } from "./api/deleteBooking";
import { createBooking } from "./api/createBooking";
import { editBooking } from "./api/editBooking";

function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    getBookingsList();
  }, []);

  const getBookingsList = async () => {
    try {
      const bookingsData = await getBookings();
      setBookings(bookingsData);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleCreateClick = async () => {
    try {
      await createBooking();
      getBookingsList();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleDescriptionEdit = async (id: number, description: string) => {
    try {
      await editBooking(id, description);
      getBookingsList();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await deleteBooking(id);
      getBookingsList();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="app">
      <Header onCreateClick={handleCreateClick} />
      <CardList
        itemsList={bookings}
        onDescriptionEdit={handleDescriptionEdit}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;
