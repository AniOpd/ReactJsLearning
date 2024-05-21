import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/theme";
import { useState,useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = () => setTheme("dark");
  const lightTheme = () => setTheme("light");

// actual change in theme is done using js
  
  useEffect(() => {
    document.querySelector("html").classList.remove("dark","light");
    document.querySelector("html").classList.add(theme);
  },[theme])

  return (
    <>
      <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card />
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
