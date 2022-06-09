import { mergeProps } from "solid-js";
import "./SocialButton.css";

function SocialButton(props) {
  return (
    <button>
      <div>{props.icon}</div>
      <div>{props.name}</div>
    </button>
  );
}

export default SocialButton;
