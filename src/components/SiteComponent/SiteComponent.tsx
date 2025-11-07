import "./SiteComponent.css";

interface siteComponentProps {
  name: string;
  url: string;
  image?: string;
  index: number;
}

const SiteComponent: React.FC<siteComponentProps> = ({
  name,
  url,
  image,
  index,
}) => {
  const openPage = (url: string) => {
    const win = window.open(url, "streamWindow");
    if (win) {
      const timer = setInterval(() => {
        if (win.closed) {
          clearInterval(timer);
          window.focus(); // bring your app tab back to focus
        }
      }, 1000);
    }
  };

  return (
    <>
      <div
        className="site-component-wrapper"
        key={"site-" + index}
        onClick={() => openPage(url)}
      >
        <img src={image}></img>
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default SiteComponent;
