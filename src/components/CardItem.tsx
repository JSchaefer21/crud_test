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
        <p>
          <b>Status: </b>
          {item.status}
        </p>

        <p>
          <b>Created at: </b>
          {new Date(item.createdAt).toLocaleString()}
        </p>

        {item.deletedAt && (
          <p>
            <b>Deleted at: </b>
            {new Date(item.deletedAt).toLocaleString()}
          </p>
        )}

        <div className="card-data">
          <p>
            <b>Description: </b>
          </p>
          {isEditItem ? (
            <textarea
              className="textarea"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          ) : (
            <p>{item.description}</p>
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
