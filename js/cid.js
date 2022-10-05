// -----------------------------------------------------
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__navigation");
let menuLink = menu.querySelectorAll(".nav__link");
let red = document.querySelector(".undercontainer-text-1");

burger.addEventListener("click", function() {
  burger.classList.toggle("burger--active");

  menu.classList.toggle("header__navigation--active");

  document.body.classList.toggle("stop-scroll");
})

menuLink.forEach(function(elem) {
  elem.addEventListener("click", function() {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__navigation--active");

    document.body.classList.remove("stop-scroll")
  })
})
// -------------------------------------------------------
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});
  // ----------------------------------------------------------
  let worksteps = document.querySelector(".worksteps-list1")
  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
      btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      worksteps.classList.add("color--one")
    });
    });
// -------------------------------------------------------------------------------------------------------
$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
  });
  // --------------------------------------------------------------------------------------------------------------------
  $(document).ready(function(){

    $(".fa-search").click(function(){
      $(".wrap, .input").toggleClass("active");
      $("input[type='text']").focus();
    });

  });
  // -----------------------------------------------------------------------------------------------------------------------------------

  let search = document.querySelector(".search")
  let menuLin = document.querySelector(".button__sch1");
  let header__logo = document.querySelector(".header__logo")
  search.addEventListener("click", function(e) {
    e.stopPropagation
    this.classList.add("search--active")
    search.classList.remove("search--active1");
    menuLin.classList.add("button__sch11");
    header__logo.classList.add("disp--none")

  })
  menuLin.addEventListener("click", function() {
    search.classList.add("search--active1");
    menuLin.classList.remove("button__sch11")
    header__logo.classList.remove("disp--none")

  })

  let search1 = document.querySelector(".search1")
  let nav__svg__button = document.querySelector(".nav__svg__button");
  let nav__svg = document.querySelector(".nav__svg")
  search1.addEventListener("click", function() {
    search1.classList.add("search--active")
    nav__svg.classList.add("disp--none")
    nav__svg__button.classList.add("disp--ok")
  })
  nav__svg__button.addEventListener("click", function() {
    search1.classList.remove("search--active")
    nav__svg.classList.remove("disp--none")
    nav__svg__button.classList.remove("disp--ok")
  })




