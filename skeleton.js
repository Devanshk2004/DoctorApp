let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function(){
    sidebar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add(active);
            });
        };
    });
};

let dropdownBtnText = document.getElementById("drop-text");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtnText.onclick = function () {
  list.classList.toggle("show");
  icon.style.rotate = "-180deg";
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "icon" &&
    e.target.id !== "span"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;
    if (e.target.innerText == "Everything") {
      input.placeholder = "Search Anything...";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "...";
    }
  };
}


