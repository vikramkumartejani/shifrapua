import { ActivityStreets } from "./components/ActivityStreets/ActivityStreets";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Organization from "./components/Organization/Organization";
import ShepraPuaRehovot from "./components/ShepraPuaRehovot/ShepraPuaRehovot";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
       <Hero/>
      <ShepraPuaRehovot/>
      <Organization/>
      <ActivityStreets/>
     </main>
  );
}
