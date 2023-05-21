import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";


type AssignmentProps = {
  tileNumber: number;
  onDelete: () => void;
};

export function Assignment({tileNumber, onDelete }:AssignmentProps ) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>Some Title and Tile: {tileNumber}</p>

      <button type="button" className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
