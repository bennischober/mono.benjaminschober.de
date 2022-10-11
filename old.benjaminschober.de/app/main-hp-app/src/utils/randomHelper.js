function getMyAge(birthDate) {
    let time_diff = Date.now() - birthDate.getTime();
    let age_dt = new Date(time_diff);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

//getMyAge(new Date(1998, 4, 21));
function getCurrentYear() {
    return new Date().getFullYear();
}

module.exports = {
    getMyAge,
    getCurrentYear,
}
