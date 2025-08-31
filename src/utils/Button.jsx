import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary" }) {
  const base =
    "rounded-full bg-yellow-400  font-semibold text-stone-800 uppercase transition-all duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-700 focus:ring-offset-2 focus:outline-0 inline-block";
  const className = {
    primary: `${base} px-4 py-3`,
    small: `${base} px-4 py-2 text-sm`,
  };

  if (to) {
    return (
      <Link className={className[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={className[type]}>
      {children}
    </button>
  );
}

export default Button;
