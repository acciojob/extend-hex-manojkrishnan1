const extendHex = (shortHex) => {
  // write your code here
	const str = shortHex.toLowerCase();
  let n = str.length;
  let result = "";
  for(let i=0;i<n;i++){
    if(str[i]=="#")
      continue;

      result += str[i]+str[i];
  }
  return result;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
