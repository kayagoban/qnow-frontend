var arry = [
  {
    fristName: "fatma",
    lastName: "shauqi",
  },
  {
    fristName: "oday",
    lastName: "ajam",
  },
  {
    fristName: "greg",
    lastName: "thomas",
  },
];
console.log(arry);
window.addEventListener('load', function () {
    getList(arry);
})

function getList(arry) {
  var info = "<ul>";
  for (var i = 0; i < arry.length; i++) {
    var person = arry[i];
    var personName = person.fristName;
    var personLastName = person.lastName;
    var personHtml =
      "<li>" + personName + "</li>" + "<li>" + personLastName + "</li>";
    info = info + personHtml;
  }
  info = info + "</ul>";
  document.body.innerHTML += info;
}