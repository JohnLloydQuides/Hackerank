function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2));
    const modifier = s.slice(-2);
    const rest = s.slice(2, -2);

    if (modifier === 'AM') {
        hour = hour === 12 ? 0 : hour;
    } else {
        hour = hour === 12 ? 12 : hour + 12;
    }

    const hourStr = hour.toString().padStart(2, '0');
    return hourStr + rest;
}
