import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import Message from "./Message";

function Header() {
  const data = useSelector((state) => state.seats);
  console.log(data);
  return (
    <>
      <header className={styles.mainHeader}>
        <div>LOGO SPACE</div>
        <div>Total Amount: {data.totalPrice}</div>
      </header>
      {data.message !== "" && <Message textData={data.message}/>}
    </>
  );
}

export default Header;
