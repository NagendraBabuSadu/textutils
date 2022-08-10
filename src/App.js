import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

// eslint-disable-next-line
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutPage="AboutText" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutPage="About" />

      <div className="container" my-3>
        {/* <TextForm heading="Enter your Text to Analyze" /> */}
        <About/>
      </div>
      
    </>
  );
}

export default App;
