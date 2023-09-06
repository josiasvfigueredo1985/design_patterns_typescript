import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NuRewards from "./NuRewards";

const card1 = new CreditCard();
const card2 = new DebitCard();
const card3 = new NuRewards();

// Calling methods from implementations from Interface
card1.validate();
card1.collectPayment();
card2.validate();
card2.collectPayment();
// Calling method from extension
card3.rewardsScore();

