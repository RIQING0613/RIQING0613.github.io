let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/456.jpg") {
    myImage.setAttribute("src", "images/123.jpg");
  } else {
    myImage.setAttribute("src", "images/456.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "SEVENTEEN " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "SEVENTEEN " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };