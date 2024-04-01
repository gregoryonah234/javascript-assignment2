
// console.log( 5 >= 6);
// console.log(5 <= 6);


// // let x= 3;
// // let y= 5;
// // let z= 8;

// console.log( x < z && z == y);
// console.log(y > x || z <= y);

// console.log(!(5=='10'));
// console.log(!(5==='5'));

// let x= 8;
// let y= 12;
// let z= 96;

// if(x < z) {
//     console.log( x < z)
// }
// else(
//     console.log(x > z)
// )

// let A= 90<=100;
// let B= 80<=89;
// let C= 70<=79;
// let D= 60<=69;
// let F= 60<=0;

// let a = 90;
// if(a >= 90) {
//     console.log('A')
// }
// else if(a <= 80 && a >= 89) {
//     console.log('B')
// }
// else if(a <= 70 && a >= 79) {
//     console.log('C')
// }
// else if( a<= 60 && a >= 69) {
//     console.log('D')
// }
// else if(a < 60 ) {
//     console.log('F')
// }

// let x=7;
// if(x==1) {
//     console.log('Sunday')
// }
// else if(x==2) {
//     console.log('Monday')
// }
// else if(x==3) {
//     console.log('Tuesday')
// }
// else if(x==4) {
//     console.log('Wednesday')
// }
// else if(x==5) {
//     console.log('Thursday')
// }
// else if(x==6) {
//     console.log('Friday')
// }
// else if(x==7) {
//     console.log('Saturday')
// }




// let letter='a';
// if(letter==='a') {
//     console.log('This is a vowel')
// }
// else if(letter==='e') {
//     console.log('This is a vowel')
// }
// else if(letter==='i') {
//     console.log('This is a vowel')
// }
// else if(letter==='o') {
//     console.log('This is a vowel')
// }
// else if(letter==='u') {
//     console.log('This is a vowel')
// }
// else{
//     console.log('This is a consonant')
// }

// let day= 6;
// let dayname;
// switch (day) {
//     case 1:
//         dayname= 'Sunday'
//         break;
//     case 2:
//         dayname= 'Monday'
//         break;
//     case 3:
//         dayname= 'Tueday'
//         break; 
//     case 4:
//         dayname= 'Wednesday'
//         break; 
//     case 5:
//         dayname= 'Thursday'
//         break;
//     case 6:
//         dayname= 'Friday'
//         break; 
//     case 7:
//         dayname= 'Saturday'
//         break;
//     default:Invalid
//         break;
// }
// console.log(dayname)



















// ASSIGNMENTS

// assignment 3
// Determine if a given number is even or odd 

// let x = 5
// if(x == 4) {
//     console.log('Its even')
// }
// else if(x==6) {
//     console.log('Its even')
// }
// else if(x==8) {
//     console.log('Its even')
// }
// else if(x==10) {
//     console.log('Its even')
// }
// else{
//     console.log('Its Odd')
// }

// assignment 6
// Given a month as a number from 1 to 12 display the season it falls in (Spring Summer Autumn Winter)

// let months=2;
// let dayname;
// switch(months) {
//     case 1:
//           dayname= 'Spring'
//           break;
//     case 2:
//           dayname= 'Spring'
//           break;
//     case 3:
//           dayname= 'Spring'
//          break;
//     case 4:
//           dayname= 'Summer'
//          break; 
//     case 5:
//           dayname= 'Summer'
//           break;   
//     case 6:
//           dayname= 'Summer'
//           break; 
//     case 7:
//           dayname= 'Autumn'
//           break;    
//     case 8:
//           dayname= 'Autumn'
//           break;
//     case 9:
//           dayname= 'Autumn'
//           break;
//     case 10:
//           dayname= 'Winter'
//           break;
//     case 11:
//           dayname= 'Winter'
//           break;
//     case 12:
//           dayname= 'Winter'
//           break;                            
// }
// console.log(dayname)

// assignment 9
// Issuing a temperature warning based on conditions

// let a = 0;
// let b = 35;

// if (a < 0 ) {
//     console.log('freezing')
// }
// else if(b > 35) {
//     console.log('heatwave')
// }

// assignment 16
// Implement a Scholarship Eligibility Checker for a uni with specific criteria.

// let a = 3.0;
// let b = 3.5;
// let c = 3.8;

// let x = 2.5;

// if( x > 3.8 && x <= 5.0) {
//     console.log('You have been Offered Full Scholarship!')
// }
// else if( x >3.5 && x < 3.8) {
//     console.log('You have been Offered Partial Scholarship!')
// }
// else if( x > 3.0 && x < 3.5) {
//     console.log('We have Considered offering you Financial Aid')
// }
// else(
//     console.log('You have been opted out of the Scholarship Program')
// )



// assignment 14:
// Determine eligibilty for a health insurance plan based on age and pre existing conditions 


// function checkEligibility( age, preExistingConditions) {

// if(age >= 18 && age <= 60 && !preExistingConditions) {
//     console.log('Approved for full Coverage Plan')
// }
// else if( age > 60 && !preExistingConditions) {
//     console.log('You Have Been Offered a limited Coverage plan')
// }
// else{
//     console.log('Your Application has been rejected due to pre-existing conditions')
// }

// }

// const applicant1 = {age: 62, preExistingConditions:true} ;
// console.log(checkEligibility(applicant1.age, applicant1.preExistingConditions));
 

// assignment 2
// Leap Year Checker

// function isaleapyear(year) {
//     console.log(year % 4===0 && year % 100 !==0) || (year % 400===0);
// }
// const year= 2050;

// if(isaleapyear(year)) {
//     console.log(year+ 'is a leap year')
// }
// else{
//     console.log(year+ 'is not a leap year')
// }



// assignment 15
// Design a loan application approval system with stricter criteria

// function loanApproval (income, creditscore, outstandingDebt) {

// if(income > 80,000 && creditscore > 750 && outstandingDebt===0) {
//     console.log('Your Loan Has Been Approved');  
// }
// else if(income >= 50,000 && income <= 80,000 && creditscore > 700 && outstandingDebt<=1) {
//     console.log('We are Offering you a reduced interest rate');
// }
// else if(income < 50,000 && income > 30,000 && creditscore > 650 && outstandingDebt<3) {
//     console.log('Your Applicatipon Is Under Review');
// }    
// else{
//     console.log('Your Application Has Been Rejected');
// }
// }

// let result1 = loanApproval(85,000, 800, 0)
// console.log(result1);

// let result2 = loanApproval(60,000, 500, 1) 
// console.log(result2);




// assignment 11
// Write a system that grants licenses based on age a written test score

function licensesGrant (age, writtentest) {
    
    

    if(age >= 16 && writtentest >= 80) {
        console.log('Offered Drivers License')
    }
    else if(age <16 && writtentest=== 90) {
        console.log('Offer A learners Permit')
    }
    
    }   