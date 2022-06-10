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
            <button>
              <div>Twitch</div>
              <BiLogoTwitch size={21} />
            </button>
            <button>
              <div>YouTube</div>
              <BiLogoYoutube size={21} />
            </button>
            <button>
              <div>Twitter</div>
              <BiLogoTwitter size={21} />
            </button>
            <button>
              <div>Instagram</div>
              <BiLogoInstagramAlt size={21} />
            </button>
            <button>
              <div>TikTok</div>
              <BiLogoTiktok size={21} />
            </button>
          </div>
        </div>
        <div class="right">
          <iframe
            src="https://player.twitch.tv/?channel=danielfenner&parent=localhost&muted=true"
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </div>
  );
}

export default App;
