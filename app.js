

var cardLinks = document.querySelectorAll(".concept-card");

cardLinks.forEach((el)=>{
    el.addEventListener("mouseover",(e)=>{
        el.classList.add("card-hover-shadow")
    })
    el.addEventListener("mouseout",(e)=>{
        el.classList.remove("card-hover-shadow")
    })
})

$(function () {
    $('[data-toggle="popover"]').popover({
        trigger:'hover',
        html:true,
        placement:'bottom'
    })
  })