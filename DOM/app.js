let btn = document.createElement("button");
btn.className = "Example-1";
let btnText = document.createTextNode("Click for a Nice Alert!");
btn.appendChild(btnText);
btn.style.display = "block";
btn.style.marginTop = "5px";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
  alert("Thanks for visiting my page! 😎 This is Example 1!");
});

let formButton = document.getElementById("form-button");


formButton.addEventListener("click", function () {
  let formText = document.getElementById("text-box").value;
  alert(formText + " This is Example 2!");
});

let colorDiv = document.getElementById("color-changin-div");
colorDiv.style.border = "1px solid black";
colorDiv.style.padding = "1em 1em 1em 1em";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let mouseColor = function () {
  colorDiv.addEventListener("mouseenter", function () {
    colorDiv.style.backgroundColor = getRandomColor();
  });
  colorDiv.addEventListener("mouseleave", function () {
    colorDiv.style.backgroundColor = "";
  });
};

mouseColor();

let exP = document.getElementById("color-changin-p");

exP.addEventListener("click", function () {
  exP.style.color = getRandomColor();
});

let nameDiv = document.getElementById("name-div");
let divBtn = document.getElementById("btn-div");

divBtn.addEventListener("click", function () {
  let nameSpan = document.createElement("span");
  let myName = document.createTextNode('Brandon "Mr Example 5" Varner');
  nameSpan.appendChild(myName);
  nameSpan.style.margin = "5px";
  nameDiv.appendChild(nameSpan);
});

let list = document.getElementById("friends");
let listBtn = document.getElementById("friends-button");
let friends = [
  "Richard",
  "Resha",
  "Mel",
  "Lovelight",
  "Sofi",
  "Cory",
  "Jeremy",
  "Alex",
  "Lucy",
  "David",
];
let listBtnTxt = document.createTextNode(
  "Click Here to See My Friends! (Example 6)"
);
listBtn.appendChild(listBtnTxt);

let listCount = 0;

counterReset = function () {
  if (listCount >= 10) {
    listCount = 0;
  }
};

listBtn.addEventListener("click", function () {
  let listItem = document.createElement("li");
  let friendName = document.createTextNode(friends[listCount]);
  for (i = 0; i < friends.length; i++) {
    listItem.appendChild(friendName);
  }
  list.appendChild(listItem);
  listCount++;
  counterReset();
  console.log(listCount);
});
