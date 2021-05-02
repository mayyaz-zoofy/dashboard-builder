import Suspense from "./utils/Suspense";
import { useContext } from "react";
import { renderRoutes } from 'react-router-config';
import AppContext from "./AppContext";

export default function Root(props) {
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <div>
      <Suspense>{renderRoutes(routes)}</Suspense>
    </div>
  )
}