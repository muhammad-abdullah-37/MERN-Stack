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



/* Question 2
Step-by-step Instructions:

1. Declare variables to store the minimum income and minimum credit score required for duplex, condo, and car loans.
2. Create a function named getLoanMessage that accepts annualIncome and creditScore as parameters.
3. Inside the function, first check if the applicant qualifies for a duplex loan by comparing the annual income and credit score with the duplex requirements. If they do, return the duplex loan message.
4. If the applicant does not qualify for a duplex loan, check if they qualify for a condo loan. If they do, return the condo loan message.
5. If the applicant does not qualify for a condo loan, check if they qualify for a car loan. If they do, return the car loan message.
6. If none of the loan requirements are met, return a message indicating that the applicant does not qualify for any loans.
7. Outside the function, create variables that call getLoanMessage() with different income and credit score values to test each possible outcome.
8. Log each returned message to the console to verify that the function works correctly.
*/

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg  = getLoanMessage(65000, 690);
const carLoanMsg    = getLoanMessage(45000, 660);
const noLoanMsg     = getLoanMessage(25000, 550);
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);