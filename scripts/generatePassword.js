function generateRandomPassword() {

  //Sets an string of the alphabet in both upper and lower cases.
  const passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&";
  let randomString = "";

  //Sets a random string by using math.random and the overall length of the string to choose from.
  while (randomString.length < 10) {
    randomString += passwordChars.charAt(Math.floor(Math.random() * alphabet.length));
  }

  return randomString;
}

module.exports = { generateRandomPassword };