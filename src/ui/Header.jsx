import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="text-pizza-900 flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-3 py-3 uppercase">
      <Link to="/" className="font-pizza racking-widest">
        ekum pizza co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
