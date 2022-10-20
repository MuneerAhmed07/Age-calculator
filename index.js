function age() {
    var getDate = document.getElementById("date").value;
    var getMonth = document.getElementById("month").value;
    var getYear = document.getElementById("year").value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (getDate > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (getMonth > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - getDate;
    var m = m2 - getMonth;
    var y = y2 - getYear;
    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}