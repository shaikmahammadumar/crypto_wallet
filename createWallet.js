const { Wallet } = require("ethers");

// Generate a new wallet
const wallet = Wallet.createRandom();

console.log("Your Wallet Address:", wallet.address);
console.log("Your Private Key:", wallet.privateKey);

console.log("Save these details carefully! NEVER share the private key with anyone.");
