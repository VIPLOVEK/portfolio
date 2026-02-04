export interface Quote {
  text: string;
  author: string;
}

export const securityQuotes: Quote[] = [
  {
    text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.",
    author: "Gene Spafford"
  },
  {
    text: "Security is not a product, but a process.",
    author: "Bruce Schneier"
  },
  {
    text: "The biggest threat to cybersecurity is the human element.",
    author: "Unknown"
  },
  {
    text: "Privacy is not an option, and it shouldn't be the price we accept for just getting on the Internet.",
    author: "Gary Kovacs"
  },
  {
    text: "Hacking is not a crime, it's a skill. What you do with that skill determines if it's criminal or not.",
    author: "Unknown"
  },
  {
    text: "The Internet is the first thing that humanity has built that humanity doesn't understand.",
    author: "Eric Schmidt"
  },
  {
    text: "There are two types of companies: those that have been hacked, and those that will be.",
    author: "Robert Mueller"
  },
  {
    text: "In God we trust, all others we monitor.",
    author: "NSA Motto"
  },
  {
    text: "Security through obscurity is not security at all.",
    author: "Unknown"
  },
  {
    text: "The best defense is a good offense, and in cybersecurity, that means proactive threat hunting.",
    author: "Unknown"
  },
  {
    text: "Data is the pollution problem of the information age, and protecting privacy is the environmental challenge.",
    author: "Bruce Schneier"
  },
  {
    text: "Passwords are like underwear: don't let people see it, change it very often, and you shouldn't share it with strangers.",
    author: "Chris Pirillo"
  },
  {
    text: "The weakest link in the security chain is the strongest link for attack.",
    author: "Unknown"
  },
  {
    text: "Cybersecurity is much more than a matter of IT. It's about protecting the fundamental rights of the digital age.",
    author: "Stephane Nappo"
  },
  {
    text: "There is no patch for human stupidity.",
    author: "Unknown"
  },
  {
    text: "Hackers don't break in, they log in.",
    author: "Unknown"
  },
  {
    text: "Security is always excessive until it's not enough.",
    author: "Robbie Sinclair"
  },
  {
    text: "The price of freedom is eternal vigilance, and nowhere is this more true than in cybersecurity.",
    author: "Unknown"
  },
  {
    text: "Attack is the best form of defense. In cybersecurity, assume breach and plan accordingly.",
    author: "Unknown"
  },
  {
    text: "Kubernetes without security is like a fortress with open gates.",
    author: "Unknown"
  },
  {
    text: "Cloud security is not about securing the cloud, it's about securing what's in the cloud.",
    author: "Unknown"
  },
  {
    text: "Zero trust is not zero access. It's about verifying everything and trusting nothing.",
    author: "Unknown"
  },
  {
    text: "In cybersecurity, you're only as secure as your weakest container.",
    author: "Unknown"
  },
  {
    text: "AI is transforming security, but who's securing the AI?",
    author: "Unknown"
  },
  {
    text: "The best time to fix a security vulnerability was yesterday. The second best time is now.",
    author: "Unknown"
  },
  {
    text: "Compliance doesn't equal security, but security should drive compliance.",
    author: "Unknown"
  },
  {
    text: "In the cloud, shared responsibility means everyone is responsible for security.",
    author: "Unknown"
  },
  {
    text: "Threat modeling isn't optional; it's the blueprint for secure design.",
    author: "Unknown"
  },
  {
    text: "Every line of code is a potential vulnerability waiting to be discovered.",
    author: "Unknown"
  },
  {
    text: "Defense in depth: because one layer of security is never enough.",
    author: "Unknown"
  },
  {
    text: "Security automation is not about replacing humans, it's about amplifying their capabilities.",
    author: "Unknown"
  }
];

/**
 * Get quote of the day based on current date
 * Returns the same quote for the entire day
 */
export function getQuoteOfTheDay(): Quote {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const index = dayOfYear % securityQuotes.length;
  return securityQuotes[index];
}
