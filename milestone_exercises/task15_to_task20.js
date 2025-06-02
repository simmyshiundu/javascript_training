/* TASK 15: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses 
the gross salary to find the NHIF. 
To find the Kenya NHIF Rate using THIS LINK:  
Write a normal program but use functions if you feel comfortable.
 */

// GROSS SALARY FUNCTION
function calcGrossSalary(basic, benefit) {
    let gross = basic + benefit;
    return gross;
}

let basicSalary = parseFloat(prompt('basic salary: '));
let benefits = parseFloat(prompt('benefits: '));
let grossSalary = calcGrossSalary(basicSalary, benefits);
alert(`gross salary: ${grossSalary}`);

// NHIF FUNCTION
function calcNhif(gross) {
    let nhifCr;
    if (gross <= 5999) {
        nhifCr = 150;
    } else if (gross >= 6000 && gross <= 7999) {
        nhifCr = 300;
    } else if (gross >= 8000 && gross <= 11999) {
        nhifCr = 400;
    } else if (gross >= 12000 && gross <= 14999) {
        nhifCr = 500;
    } else if (gross >= 15000 && gross <= 19999) {
        nhifCr = 600;
    } else if (gross >= 20000 && gross <= 24999) {
        nhifCr = 750;
    } else if (gross >= 25000 && gross <= 29999) {
        nhifCr = 850;
    } else if (gross >= 30000 && gross <= 34999) {
        nhifCr = 900;
    } else if (gross >= 35000 && gross <= 39999) {
        nhifCr = 950;
    } else if (gross >= 40000 && gross <= 44999) {
        nhifCr = 1000;
    } else if (gross >= 45000 && gross <= 49999) {
        nhifCr = 1100;
    } else if (gross >= 50000 && gross <= 59999) {
        nhifCr = 1200;
    } else if (gross >= 60000 && gross <= 69999) {
        nhifCr = 1300;
    } else if (gross >= 70000 && gross <= 79999) {
        nhifCr = 1400;
    } else if (gross >= 80000 && gross <= 89999) {
        nhifCr = 1500;
    } else if (gross >= 90000 && gross <= 99999) {
        nhifCr = 1600;
    } else if (gross >= 100000) {
        nhifCr = 1700;
    } else {
        nhifCr = 500;
    }
    return nhifCr;
}

const nhifConRate = calcNhif(grossSalary);
alert(`NHIF contribution rate: ${nhifConRate}`);


/* TASK 16: Using Python or PHP or Java or Ruby or JavaScript
Continue with the program above, then use the gross salary to find the NSSF. 
To find the Kenya NSSF Rate using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
Write a normal program but use functions if you feel comfortable.
 */

// NSSF FUNCTION
function calcNssf(gross) {
    let nssfR;
    if (gross >= 18000) {
        nssfR = 0.06 * gross;
    } else {
        nssfR = "don't qualify for NSSF";
    }
    return nssfR;
}

let nssfRate = calcNssf(grossSalary);
alert(`NSSF rate: ${nssfRate}`);


/* Task 17: Using Python or PHP or Java or Ruby or JavaScript
Continue with the same program and calculate an individual’s NHDF using:
 i.e., NHDF = gross_salary * 0.015
Write a normal program but use functions if you feel comfortable.
 */

// NHDF FUNCTION
function calcNhd(gross) {
    let nhdf_p = 0.015 * gross;
    return nhdf_p;
}

let nhdfV = calcNhd(grossSalary);
alert(`NHDF: ${nhdfV}`);


/* Task 18: Using Python or PHP or Java or Ruby or JavaScript
Calculate the taxable income.
i.e., taxable_income = gross salary - (NSSF + NHDF + NHIF) 
Write a normal program but use functions if you feel comfortable.
 */

// TAXABLE INCOME FUNCTION
function calcTaxableIncome(gross, nssf, nhdf, nhif) {
    let taxInc = gross - (nssf + nhdf + nhif);
    return taxInc;
}

let taxableIncome = calcTaxableIncome(grossSalary, nssfRate, nhdfV, nhifConRate);
alert(`taxable income: ${taxableIncome}`);


/* TASK 19: Using Python or PHP or Java or Ruby or JavaScript
Continue with the same program and find the person's PAYEE using the taxable income above.
Find the Kenya PAYEE Tax Rate using THIS LINK
Write a normal program but use functions if you feel comfortable.
 */

// PAYE TAX FUNCTION
function calcPaye(taxInc) {
    let payeOutput;
    if (taxInc <= 24000) {
        payeOutput = 0.1 * taxInc;
    } else if (taxInc > 24000 && taxInc <= 32333) {
        payeOutput = (0.1 * 24000) + (0.25 * (taxInc - 24000));
    } else if (taxInc > 32333 && taxInc <= 500000) {
        payeOutput = (0.1 * 24000) + (0.25 * 8333) + (0.3 * (taxInc - 32333));
    } else if (taxInc > 500000 && taxInc <= 800000) {
        payeOutput = (0.1 * 24000) + (0.25 * 8333) + (0.3 * 467667) + (0.325 * (taxInc - 500000));
    } else {
        payeOutput = (0.1 * 24000) + (0.25 * 8333) + (0.3 * 467667) + (0.325 * 300000) + (0.35 * (taxInc - 800000));
    }
    return payeOutput;
}

let paye = calcPaye(taxableIncome);
alert(`PAYE: ${paye}`);


/* Task 20: Using Python or PHP or Java or Ruby or JavaScript
Continue with the same program and calculate an individual’s Net Salary using:
 net_salary = gross_salary - (nhif + nhdf + nssf + payee)

Write a normal program but use functions if you feel comfortable.
 */

// NET SALARY FUNCTION
function calcNetSalary(gross, nhif, nhdf, nssf, payeP) {
    let netS = gross - (nhif + nhdf + nssf + payeP);
    return netS;
}

let netSalary = calcNetSalary(grossSalary, nhifConRate, nhdfV, nssfRate, paye);
alert(`net salary: ${netSalary}`);