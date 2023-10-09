import { Booking } from "../types";
import CardItem from "./CardItem";
import "../Card.css";

type Props = {
  itemsList: Booking[];
  onDescriptionEdit: (id: number, description: string) => void;
  onDeleteClick: (id: number) => void;
};

function CardList({ itemsList, onDescriptionEdit, onDeleteClick }: Props) {
  return (
    <div className="card-list">
      {itemsList.map((item) => (
        <CardItem
          key={item.id}
          item={item}
          onDescriptionEdit={(description) =>
            onDescriptionEdit(item.id, description)
          }
          onDeleteClick={() => onDeleteClick(item.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
