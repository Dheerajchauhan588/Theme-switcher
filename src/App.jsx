import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./compnents/Themebtn";
import Cards from "./compnents/cards";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm mx-auto p-4">
          {/* Theme Button */}
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Cards */}
          <Cards />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
