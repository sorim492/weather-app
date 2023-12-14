import "./styles.css";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Weather city="New York"/>
      <Footer />
    </div>
  );
}
