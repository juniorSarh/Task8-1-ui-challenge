// App.tsx
import "./App.css";
import Header from "./components/Header";
import MainDiv from "./components/MainDiv";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <h1 className="page-title">Designed For The Future</h1>
      <MainDiv />
      <Footer />
    </>
  );
}

export default App;
