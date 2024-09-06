import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              Component={route.component}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
