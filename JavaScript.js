
//Раскрытие картинок
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


let text = document.querySelector('.time').textContent;
console.log(text);


//Адаптивный хедер
$(".navigation-mobile-collapse").on("click", function (e) {
  e.preventDefault();

  $(this).toggleClass("navigation-mobile-collapse_active");
  $(".navigation-menu").toggleClass("navigation-menu_show");
});