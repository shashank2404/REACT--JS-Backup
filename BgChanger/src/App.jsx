import { useState } from "react";
import "./App.css";

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 transition-colors"
        style={{ backgroundColor: colour }}
      >
        {/* Buttons container */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColour("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColour("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColour("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColour("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColour("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg border"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
