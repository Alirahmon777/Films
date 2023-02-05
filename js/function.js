const elForm = document.querySelector(".form");
const elPalidromeInput = document.querySelector(".inputs__palindrome");
const elLeapInput = document.querySelector(".inputs__leapyear");
const elPalidromeText = document.querySelector(".palindrome-text");
const elLeapYear = document.querySelector(".leap-text");
const array = [1, 2, -7, 3, -19, 4, 5, -6];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
elPalidromeInput.addEventListener("change", () => {
  elPalidromeText.textContent = "True";
  if (checkPalindrome(elPalidromeInput.value) == true) {
    elPalidromeText.classList.remove("opacity-0");
    elPalidromeText.classList.add("text-bg-success");
    elPalidromeText.classList.remove("text-bg-danger");
  } else {
    elPalidromeText.textContent = "false";
    elPalidromeText.classList.remove("opacity-0");
    elPalidromeText.classList.remove("text-bg-success");
    elPalidromeText.classList.add("text-bg-danger");
  }
});

elLeapInput.addEventListener("change", () => {
  elLeapYear.textContent = "True";

  if (checkLeapYear(elLeapInput.value) == true) {
    elLeapYear.classList.remove("opacity-0");
    elLeapYear.classList.add("text-bg-success");
    elLeapYear.classList.remove("text-bg-danger");
  } else {
    elLeapYear.textContent = "false";
    elLeapYear.classList.remove("opacity-0");
    elLeapYear.classList.remove("text-bg-success");
    elLeapYear.classList.add("text-bg-danger");
  }
});

function checkPalindrome(x) {
  let reverse = x.toString().split("").reverse().join("");
  return x.toString() === reverse;
}

function checkLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}

function checkNegative(arr) {
  let negativeArr = [];
  arr.forEach((element) => {
    if (element < 0) {
      negativeArr.push(element);
    }
  });

  console.log("sonlar", array);
  console.log("manfiy sonlar", negativeArr);
  alert(`SONLAR \n ${array.join("; ")}`);
  alert(`MANFIY SONLAR \n ${negativeArr.join("; ")}`);
}

checkNegative(array);
