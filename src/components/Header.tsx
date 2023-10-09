import "../styles/Header.css";

type Props = {
  onCreateClick: () => void;
};

function Header({ onCreateClick }: Props) {
  return (
    <div className="header">
      <button onClick={onCreateClick}>Create</button>
    </div>
  );
}

export default Header;
