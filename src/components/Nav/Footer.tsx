import "./index.css";
import logo from "./logo.png";

export default function Footer() {

  const repoLink = "https://github.com/mrmendoza171/cover-image-generator";

  return (
    <div className="Footer">
      <div className="footer-logo">
        <p className="footer-copyright">
          © 2022 Cover Image Generator. All rights reserved
        </p>
      </div>

      <div className="footer-dir">
        <div className="dir-col">
          <a className="dir-link" href="#" target="_blank">
            <p className="dir-title">Feedback</p>
          </a>
        </div>
        <div className="dir-col">
          <a className="dir-link" href={repoLink} target="_blank">
            <i className="fa-brands fa-github footer-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
