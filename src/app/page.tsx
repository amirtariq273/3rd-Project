import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import WorkManagement from "./components/work-management";
import Customize from "./components/customize";
import YourWork from "./components/YourWork";
import Footer from "./components/footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Hero />
      <WorkManagement />
      <Customize />
      <YourWork />
      <Footer />
    </div>
  )
}
