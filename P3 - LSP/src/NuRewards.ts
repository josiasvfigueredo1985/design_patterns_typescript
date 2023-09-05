import NuBankRewards from "./NuBankRewards";

export default class NuRewards extends NuBankRewards {
  private score = 12232;
  rewardsScore(): void {
    this.validate();
    console.log("Your current score is " + this.score);
    this.collectPayment();
  }
}
