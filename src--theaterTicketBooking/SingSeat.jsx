import { bookTicket } from "./Redux/SeatSlice/seatSlice";
import styles from "./SeatLayout.module.css";
import { useDispatch } from "react-redux";

function SingSeat({ seat }) {
  const dispatch = useDispatch();
  const { seats: seatNumber } = seat;
  const seatClicked = (seatNumber) => {
    dispatch(bookTicket(seatNumber));
  };

  return (
    <button
      className={`${styles.singSeat} ${
        seat.available ? styles.available : styles.unavailable
      }`}
      onClick={() => seatClicked(seatNumber)}
    >
      {seatNumber}
    </button>
  );
}

export default SingSeat;
