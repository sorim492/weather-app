import "./styles.css";
import Weather from "./Weather";
import Current from "./Current";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Weather city="New York"/>
      <Current/>
      <Footer />
    </div>
  );
}
