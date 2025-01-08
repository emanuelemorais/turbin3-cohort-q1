import bs58 from "bs58";

const byteArray = bs58.decode("");
const jsonString = "[" + Array.from(byteArray).join(",") + "]";
console.log(jsonString)