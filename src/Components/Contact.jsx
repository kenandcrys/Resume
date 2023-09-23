import "../App.css";
import me from "../Images/me3.png";
const Contact = () => {
  return (
    <div>
      <img className="my-photo" src={me} alt="my image" width="200px" />

      <div className="info-container">
        <h2>
          Email:
          <a href="mailto: kenandcrys@live.com">kenandcrys@live.com</a>
        </h2>

        <h2>
          Phone:
          <a href="tel:13093730952">(309) 373-0952</a>
        </h2>

        <h2>
          LinkedIn:
          <a target="blank" href="https://linkedin.com/in/fish-kfishersr">
            linkedin.com/in/fish-kfishersr
          </a>
        </h2>

        <h2>
          GitHub:
          <a target="blank" href="https://github.com/kenandcrys">
            kenandcrys
          </a>
        </h2>

        <h2>Location: East Moline, IL 61244</h2>
      </div>
    </div>
  );
};
export default Contact;
