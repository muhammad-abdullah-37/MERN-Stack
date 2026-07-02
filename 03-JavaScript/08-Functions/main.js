/* Question 1 
Instructions:

1. Create a function named maskEmail that accepts an email address as a parameter.
2. Find the position of the "@" symbol to separate the username from the domain.
3. Keep the first and last characters of the username visible.
4. Extract the characters between the first and last username characters.
5. Count the number of extracted characters and replace each of them with an asterisk (*).
6. Combine the first character, the generated asterisks, the last username character, and the original domain to create the masked email address.
7. Return the masked email from the function.
8. Outside the function, declare an email variable, call the maskEmail function with it, and print the returned masked email to the console.
*/

const email = "apple.pie@example.com";
function maskEmail(email){
  let endIndex = email.indexOf("@") - 1;
  const targetString = email.slice(1,endIndex)
  const numOfChars = email.slice(1,endIndex).length
  const maskChars = targetString.replace(targetString,"*")
  const maskedEmail = email.slice(0,1) + maskChars.repeat(numOfChars) + email.slice(endIndex);
  return maskedEmail;
}

console.log(maskEmail(email))