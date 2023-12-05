import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main
        city="Mexico"
        country="Mexico"
        time="Wed Nov 15 2023, 00:06 A.M."
        description="cloudy"
        temperature={20}
      />
      <Footer />
    </div>
  );
}
