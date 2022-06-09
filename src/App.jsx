import logo from "./logo.svg";
import "./App.css";
import portrait from "./assets/portrait.webp";

function App() {
  return (
    <div class="app">
      <div class="gradient"></div>
      <main>
        <div class="left">
          <img src={portrait}></img>
          <h1>Daniel Fenner</h1>
          <p>gamer streamer runner</p>
          <div class="buttonGrid">
            <button>Twitch</button>
            <button>YouTube</button>
            <button>Twitter</button>
            <button>Instagram</button>
            <button>TikTok</button>
          </div>
        </div>
        <div class="right">
          <h1>Live now</h1>
          <div class="video"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
