import styles from "./SeatLayout.module.css";
import SingSeat from "./singSeat";

import { useSelector } from "react-redux";

function SeatLayout() {
    const data = useSelector(state=>state.seats);
    const settingPlan = data.seatPlan;
    console.log(data)
    return (
        <div className={styles.settingPlanContainer}>
            <div className={styles.seats}>
                {settingPlan.map(seat=><SingSeat seat={seat} key={seat.seats}/>)}
            </div>
        </div>
    )
}

export default SeatLayout
