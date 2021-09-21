let $btn = $("<button>").click(function () {
  alert("Thanks for visiting my NEW page! This is Example 1!");
});
$btn.text("Click to See Example 1 Alert!");
$btn.css("margin-top", "1em");
$("body").append($btn);

let $formText = $("input#text-box").val();
let $formBtn = $("input#form-button");
$formBtn.click(function () {
  alert($formText + " This is Example 2!");
});

let $colorDiv = $("div#color-changin-div");
$colorDiv.css({
  border: "1px solid black",
  padding: "1em 1em 1em 1em",
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$colorDiv.mouseenter(function () {
  $colorDiv.css("background-color", getRandomColor());
});

$colorDiv.mouseleave(function () {
  $colorDiv.css("background-color", "");
});

let $exP = $("p#color-changin-p");
$exP.click(function () {
  $exP.css("color", getRandomColor());
});

let $divBtn = $("button#btn-div");
$divBtn.text("Click to See My Name!");
let $nameDiv = $("div#name-div");
$divBtn.click(function () {
  let $nameSpan = $("<span>");
  $nameSpan.text('Brandon "Mr Example 5" Varner');
  $nameSpan.css("margin", "5px");
  $nameDiv.append($nameSpan);
});

let $list = $("ul#friends");
let $listBtn = $("button#friends-button");
$listBtn.text("Click Here To See My Friends (Example 6)");
let $friends = [
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

let listCount = 0;

counterReset = function () {
  if (listCount >= 10) {
    listCount = 0;
  }
};

$listBtn.click(function () {
  let $listItem = $("<li>");
  let $friendName = $listItem.text($friends[listCount]);
  for (i = 0; i < friends.length; i++) {
    $listItem.append($friendName);
  }
  $list.append($listItem);
  listCount++;
  counterReset();
});
