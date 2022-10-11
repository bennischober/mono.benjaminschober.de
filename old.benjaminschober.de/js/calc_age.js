// calculate my age
function calculateAge(birthDate) {
    let time_diff = Date.now() - birthDate.getTime();
    let age_dt = new Date(time_diff);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
document.getElementById('calc_age').innerHTML = calculateAge(new Date(1998, 4, 21));

// get year for footer
document.getElementById("cp_year").innerHTML = new Date().getFullYear();