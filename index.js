function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 2000 && ride <= 2499) {
    return "I will gladly take your thirty bucks.";
  } else if (ride > 2500) {
    return "No can do.";
  } else {
    return "That will be twenty bucks.";
  }
  // Write your code here!
}

// function ternaryCheckCity(city) {
//   // Write your code here!
//   if (city === "NYC") {
//     return "Ok, sounds good.";
//   } else {
//     return "No go.";
//   }
// }

// function ternaryCheckCity(city) {
//   // Write your code here!
//   return city === "NYC" ? "Ok, sounds good." : "No go.";
// }

const ternaryCheckCity = (city) =>
  city === "NYC" ? "Ok, sounds good." : "No go.";

const switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case "generous":
    case "GENEROUS":
      return "Thank you so much.";
      break;

    case "not as generous":
    case "NOT AS GENEROUS":
      return "Thank you.";
      break;

    default:
      return "Bye.";
  }
};
