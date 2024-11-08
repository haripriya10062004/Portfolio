
//background header
function scrollHeader(){
    const header= document.getElementById('header');
    this.scrollY >= 20 ?   header.classList.add('active') : header.classList.remove('active');

}
window.addEventListener('scroll', scrollHeader);

//type effect//
const typed = document.querySelector('.typed');

if(typed){
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed',{
        strings: typed_strings,
        loop:true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

//portfolio
let filterItems = document.querySelectorAll('.portfolio_filters li');
 function activePortfolio() {
    filterItems.forEach(e1 => {
        e1.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
 }
 filterItems.forEach(e1 => {
    e1.addEventListener('click', activePortfolio);
 })
 //mixi
          
            let mixerPorfolio = mixitup('.portfolio_wrap-container', {
                selectors: {
                    target: '.portfolio_item'
                },
                animation:{
                    duration:300
                }
            })
