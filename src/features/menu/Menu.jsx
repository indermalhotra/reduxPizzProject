import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-300">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export const loader = async () => {
  const menu = await getMenu(); // this is api call we added all api call function in a seprate file
  return menu;
};

export default Menu;
