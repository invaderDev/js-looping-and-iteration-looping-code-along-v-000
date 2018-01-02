// Code your solutions in this file
function printBadges(empNames) {
  for (i = 0; i < empNames.length; i++) {
    console.log(`Welcome ${empNames[i]}! You are employee #${i + 1}.`);
  }

  return empNames;
}
