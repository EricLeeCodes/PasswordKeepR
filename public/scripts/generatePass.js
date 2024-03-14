function generateRandomPassword() {
  //Sets an string of the alphabet in both upper and lower cases.
  const passwordChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&_;(){}[]";
  let randomString = "";

  //Sets a random string by using math.random and the overall length of the string to choose from.
  while (randomString.length < 15) {
    randomString += passwordChars.charAt(
      Math.floor(Math.random() * passwordChars.length)
    );
  }

  return randomString;
}
//Connects the button and inputs the generated value into the field

document
  .getElementById("passGenerator")
  .addEventListener("click", function() {
    const text = document.getElementById("password");
    const generatedValue = generateRandomPassword();
    text.value = generatedValue;
  });