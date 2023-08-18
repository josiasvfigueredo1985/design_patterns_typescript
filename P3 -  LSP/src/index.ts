import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NUbankRewards";

const card1 = new CreditCard();
const card2 = new DebitCard();
const card3 = new NubankRewards();

card1.validate();
card1.collectPayment();
card2.validate();
card2.collectPayment();
card3.validate();
card3.collectPayment();
