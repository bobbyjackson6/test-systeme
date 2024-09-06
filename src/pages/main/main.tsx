import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

export const Main = () => {
  return (
    <nav>
      <ul>
        {ROUTES.map((route) => {
          return (
            <li key={route.path}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
