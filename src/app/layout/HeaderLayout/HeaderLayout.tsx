// widgets
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
// react
import { Outlet } from "react-router-dom";

export const HeaderLayout = ({}) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
