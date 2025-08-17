
import { useLoaderData } from "react-router-dom";
import {getMenu} from "../../apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  console.log(menu)
  return <h1>Menu</h1>;
}

export  const loader = async () => {
  const menu = await getMenu(); // this is api call we added all api call function in a seprate file
  return menu;
}

export default Menu;
