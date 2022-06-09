import logo from "./logo.svg";
import "./App.css";
import portrait from "./assets/portrait.webp";
import {
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoTwitch,
  BiLogoYoutube,
  BiLogoTiktok,
} from "solid-icons/bi";
import SocialButton from "./components/SocialButton";

function App() {
  return (
    <div class="app">
      <div class="gradientContainer"></div>
      <div class="gradient"></div>
      <main>
        <div class="left">
          <img src={portrait}></img>
          <h1>@danielfenner</h1>
          <p>Gamer, streamer, runner, aspiring software dev</p>
          <div class="buttonGrid">
            <SocialButton name="Twitch" icon={BiLogoTwitch} />
            <SocialButton name="YouTube" icon={BiLogoYoutube} />
            <SocialButton name="Twitter" icon={BiLogoTwitter} />
            <SocialButton name="Instagram" icon={BiLogoInstagramAlt} />
            <SocialButton name="TikTok" icon={BiLogoTiktok} />
          </div>
        </div>
        <div class="right">
          <iframe
            src="https://player.twitch.tv/?channel=danielfenner&parent=localhost&muted=true"
            allowfullscreen
          ></iframe>

          <h1 class="live">Live now</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
