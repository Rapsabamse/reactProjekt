import SiteComponent from "./components/SiteComponent/SiteComponent";
import "./App.css";
import ThemeToggleComponent from "./components/ThemeToggleComponent/ThemeToggleComponent";
import { sites } from "./sites";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App(): React.JSX.Element {
  return (
    <div className="app-root">
      <ThemeToggleComponent />
      <HeaderComponent />
      <div className="app-content">
        <div className="app-apps">
          {sites.map((site, index) => {
            return (
              <SiteComponent name={site.name} url={site.url} index={index} />
            );
          })}
        </div>
      </div>
      <p
        style={{
          position: "absolute",
          right: "1rem",
          bottom: "1rem",
          margin: "0",
          color: "var(--text-color)",
        }}
      >
        VicNik Ltd™
      </p>
    </div>
  );
}

export default App;
