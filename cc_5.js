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

