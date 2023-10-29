let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => {
    const isString = typeof calculated === 'string'; // Check if calculated is a string
    const calculatedAsNumber = isString ? parseFloat(calculated) : calculated;
    calculated = calculatedAsNumber + 1;
    return calculated;
}

const calcUser = () => {
    calculated = logCalc(); // Update the calculated variable
    if (calculated > 2) user = 'John';
    if (calculated > 2) state = 'requesting';
    if (calculated > 3) state = 'idle';
}

const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
    }
}






// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()