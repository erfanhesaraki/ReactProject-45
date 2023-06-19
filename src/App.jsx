import Header from "./components/header/header";
import Section from "./components/content/content";
import Footer from "./components/footer/footer";
import "./index.css";
export default function Main() {
  return (
    <main className=" container-fluid ">
      <Header />
      <Section />
      <Footer />
    </main>
  );
}
