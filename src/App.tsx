import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <div className="font-frank">
      <RouterProvider router={MainRouter} />
    </div>
  );
};

export default App;
