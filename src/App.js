import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import store from "./Utils/store";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import { useState } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleBlur = (e) => {
    if (e?.id === "search") {
      setShowSuggestions(true);
    } else if (e?.id !== "suggestion") {
      setShowSuggestions(false);
    }
  };
  return (
    <Provider store={store}>
      <div onClick={(e) => handleBlur(e.target)}>
        <Head
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
