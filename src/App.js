import "./styles.css";
import Header from "./Header";
import Weather from "./Weather";
import Current from "./Current";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Weather city="New York"/>
      <Current/>
      <Footer />
    </div>
  );
}
