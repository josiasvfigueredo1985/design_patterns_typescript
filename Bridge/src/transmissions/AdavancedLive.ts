import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {
  constructor(platform: IPlatform) {
    super(platform);
  }
  comments(): void {
    console.log("Comentários liberados!");
  }
  subtitles(): void {
    console.log("Legendas disponíveis!");
  }
}
