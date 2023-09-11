import AppProxy from "./Proxy/AppProxy";

// Example usage
const paidUserApp = new AppProxy(true);
const freeUserApp = new AppProxy(false);

paidUserApp.displayFeatures(); // Output: Displaying all features for paid users.
freeUserApp.displayFeatures(); // Output: Displaying basic features for free users.
