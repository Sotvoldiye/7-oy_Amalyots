import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import "./MainLayout.module.scss"
import MobileSideBar from "../components/tablet_and_mobile/MobileSideBar";
function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet/>
      </main>
      <MobileSideBar/>

    </>
  );
}

export default MainLayout;
