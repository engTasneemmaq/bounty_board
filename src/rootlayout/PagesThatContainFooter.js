/** @format */
import { Outlet } from 'react-router-dom';
import Footer from "components/LandingPage/FooterSection/Footer"; 
import { MainHeader } from "shared/MainHeader/MainHeader";

export default function PagesThatContainFooter() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MainHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
