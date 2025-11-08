import { useEffect } from "react";
import "./ThemeToggleComponent.css";

const lightTheme = {
  "--bg-color": "#3AAFA9",
  "--text-color": "#FEFFFF",
  "--primary-color": "#17252A",
  "--accent-color": "#2B7A78",
  "--extra-color": "#DEF2F1",
};

// const darkTheme = {
//   "--bg-color": "#4A1942",
//   "--text-color": "#EAEAEA",
//   "--primary-color": "#893168",
//   "--accent-color": "#2E1C2B",
//   "--extra-color": "#050404",
// };

const applyTheme = (theme: Record<string, string>) => {
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

const ThemeToggleComponent = () => {
  // const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    applyTheme(lightTheme);
  }, []);

  return (
    <></>
    // <div className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)}>
    //   <h2> {darkMode ? "Light Mode" : "Dark Mode"}</h2>
    // </div>
  );
};

export default ThemeToggleComponent;
