
function amountChange() {
  document.getElementById("txtAmount").value =
    document.getElementById("amountRange").value;
}
function yearChange() {
  document.getElementById("txtYear").value =
    document.getElementById("yearRange").value;
}
function interestChange() {
  document.getElementById("txtInterest").value =
    document.getElementById("interestRange").value;
}
function calculate() {
  // r = r / (12 * 100); // one month interest
  // t = t * 12; // one month period
  // emi = (p * r * pow(1 + r, t)) / (pow(1 + r, t) - 1);

  var p = parseFloat(document.getElementById("txtAmount").value);
  var r = parseFloat(document.getElementById("txtInterest").value);
  var y = parseFloat(document.getElementById("txtYear").value);
  r = r / (12 * 100);
  y = y * 12;
  var emi = (p * r * Math.pow(1 + r, y)) / (Math.pow(1 + r, y) - 1);

  document.getElementById("result").innerHTML =
    "&#8377;" + Math.round(emi);
}

function updateAmount() {
  document.getElementById("amountRange").value =
    document.getElementById("txtAmount").value;
}
function updateYear() {
  document.getElementById("yearRange").value =
    document.getElementById("txtYear").value;
}
function updateInterest() {
  document.getElementById("interestRange").value =
    document.getElementById("txtInterest").value;
}
