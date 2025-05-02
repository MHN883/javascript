/*dark mode**/

const btn = document.querySelector('.btn')



btn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode')


    
    if (btn.innerText === 'dark mode') {
        btn.innerText = 'light mode'

    } else {
        btn.innerText = 'dark mode'
    }

})


/*slider*/

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })


  /*alert*/

  const myalert = document.querySelector('.alertj')



  myalert.style.transform = 'scale(1)'

  myalert.style.backgroundColor = 'yellow'


  myalert.innerHTML = 'پروژه کوچک جاوااسکریپت' 
  
  setTimeout(() => {
    myalert.style.marginLeft = '-100%';
  }, 7000);