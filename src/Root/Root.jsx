import { Outlet } from "react-router-dom";
import { Navber } from "../component/Navber/Navber";

export default function Root() {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
    </div>
  )
}
