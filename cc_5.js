// Step 2: Employee Array
const employees = [
    {
        name: "John Cena",
        hourlyRate: 20,
        hoursWorked: 38
    },
    {
        name: "Dakota Johnson",
        hourlyRate: 25,
        hoursWorked: 45
    },
    {
        name: "Mike Wazowski",
        hourlyRate: 18,
        hoursWorked: 50
    },
    {
        name: "Frangie Arocho",
        hourlyRate: 30,
        hoursWorked: 40
    },
    {
        name: "Callie Smith",
        hourlyRate: 20,
        hoursWorked: 42
    }
];

// Step 3: Calculate base pay only up to 40 hours
function calculateBasePay(rate, hours) {
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

// Step 4: Calculate overtime pay when hours exceed 40
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * (rate * 1.5);
    }

    return 0;
}

// Step 5: Calculate taxes at a flat rate of 15%
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

// Step 6: Process payroll
function processPayroll(employee) {
    const basePay = calculateBasePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const overtimePay = calculateOvertimePay(
        employee.hourlyRate,
        employee.hoursWorked
    );

    const grossPay = basePay + overtimePay;

    const taxes = calculateTaxes(grossPay);

    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

// Step 7: Loop through employees and display payroll for each employee
for (const employee of employees) {
    const payroll = processPayroll(employee);

    console.log("Payroll Summary");
    console.log(payroll);
    console.log("--------------------");
}