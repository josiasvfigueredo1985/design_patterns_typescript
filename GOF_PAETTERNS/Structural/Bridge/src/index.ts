import FacebookLive from "./platforms/FacebookLive";
import IPlatform from "./platforms/IPlatform";
import TwitchTV from "./platforms/TwitchTV";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdavancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform) {
  console.log("Aguarde...");
  const live = new Live(platform);
  live.broadcasting();
  live.results();
}

startLive(new YouTube());
startLive(new TwitchTV());
startLive(new FacebookLive());

function startAdvancedLive(platform: IPlatform) {
  console.log("Aguarde...");
  const live = new AdvancedLive(platform);
  live.comments();
  live.subtitles();
  live.broadcasting();
  live.results();
}

startAdvancedLive(new YouTube());
startAdvancedLive(new TwitchTV());
startAdvancedLive(new FacebookLive());
