import { useState } from "react";
import { Booking } from "../types";
import "../Card.css";
import { BookingStatus } from "../enums";

type Props = {
  item: Booking;
  onDescriptionEdit: (description: string) => void;
  onDeleteClick: () => void;
};

function CardItem({ item, onDescriptionEdit, onDeleteClick }: Props) {
  const [isEditItem, setEditItem] = useState(false);
  const [description, setDescription] = useState(item.description);

  const handleEditClick = () => {
    setEditItem(!isEditItem);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onDescriptionEdit(description);
    setEditItem(false);
  };

  return (
    <div className="card-item">
      <form onSubmit={handleSubmit}>
        <div className="card-data">Status: {item.status}</div>

        <div className="card-data">
          Created at: {new Date(item.createdAt).toLocaleString()}
        </div>

        {item.deletedAt && (
          <div>Deleted at: {new Date(item.deletedAt).toLocaleString()}</div>
        )}

        <div className="card-data">
          Description:{" "}
          {isEditItem ? (
            <textarea
              className="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          ) : (
            item.description
          )}
        </div>

        <div className="card-footer">
          <button type="button" onClick={handleEditClick}>
            {isEditItem ? "Cancel" : "Edit"}
          </button>

          {isEditItem && <button type="submit">Save</button>}

          <button
            type="button"
            onClick={onDeleteClick}
            disabled={item.status === BookingStatus.Deleted}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default CardItem;
