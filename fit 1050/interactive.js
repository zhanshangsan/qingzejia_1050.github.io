var name;

do {
  name = prompt("Please enter your name to log in to the official website");

  if (name === null || name.trim() === "") {
    alert("Please enter your name to proceed. You must provide a valid name.");
  }
} while (name === null || name.trim() === "");

console.log(name);