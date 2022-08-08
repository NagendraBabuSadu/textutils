import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// eslint-disable-next-line
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutPage="AboutText" />
      {/* <Navbar/> */}
      <div className="container">
        <TextForm heading="Enter your Text to Analyze" />
      </div>
    </>
  );
}

export default App;
