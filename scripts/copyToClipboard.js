function copyToClipboard() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
};
