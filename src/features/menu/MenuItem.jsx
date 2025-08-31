import { formatCurrency } from "../../utils/helpers";
import Button from "../../utils/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && "opacity-70 grayscale"}`}
      />
      <div className="flex grow flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between text-sm font-medium">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && <Button type="small">Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
