// const arrowDisplay = document.querySelectorAll(".fa-solid")
// const toggle=document.getElementsByClassName("toggle-container")



const barIconToggle= document.getElementById('barIcon');
// const timesIconToggle = document.getElementById('timesIcon');
  const navlist = document.getElementById('navList');
  const selectedNav = document.querySelectorAll(".navigation")
  const aboutSection= document.getElementById('about');
  const workSection= document.getElementById('work');
  const skillSection= document.getElementById('skills');
  const contactSection= document.getElementById('contact');
  const homeSection= document.getElementById('home');
  const pictureNav= document.getElementById('homeImgNav');
  const copyrightFooter = document.getElementById("copyright-footer")
      const preloader = document.getElementById("preloader")

  function addToggle(){
     navlist.classList.add('clicked')
     barIconToggle.classList.remove('fa-bars')
     barIconToggle.classList.add('fa-times')
    navlist.classList.remove ('hidden')
    homeSection.classList.add('hidden')
    aboutSection.classList.add('hidden')
   workSection.classList.add('hidden')
    skillSection.classList.add('hidden')
    contactSection.classList.add('hidden')
  }

  function removeToggle(){
      navlist.classList.remove('clicked')
      barIconToggle.classList.add('fa-bars')
      barIconToggle.classList.remove('fa-times')
     navlist.classList.add ('hidden')
     homeSection.classList.remove('hidden')
     aboutSection.classList.add('hidden')
    workSection.classList.add('hidden')
      skillSection.classList.add('hidden')
      contactSection.classList.add('hidden')
 }

 

   barIconToggle.addEventListener('click', ()=> {
    const isClicked = navlist.classList.contains('clicked')
    if(isClicked){
      removeToggle()
     }else{
      addToggle()
    }

   })
// barIconToggle.addEventListener('click',addToggle)
// timesIconToggle.addEventListener('click',removeToggle)
   
      for(let navs=0; navs < selectedNav.length; navs++){
        selectedNav[navs].addEventListener('click',e=>{
          console.log(selectedNav[navs].textContent)
          let clickedNav = selectedNav[navs].textContent
        if(clickedNav == "ABOUT"){
      aboutSection.classList.remove('hidden')
      workSection.classList.add('hidden')
      skillSection.classList.add('hidden')
      contactSection.classList.add('hidden')
      navlist.classList.add ('hidden')
        }else if(clickedNav == "WORK"){
          aboutSection.classList.add('hidden')
      workSection.classList.remove('hidden')
      skillSection.classList.add('hidden')
      contactSection.classList.add('hidden')
      navlist.classList.add ('hidden')
        }else if(clickedNav == "SKILLS"){
          aboutSection.classList.add('hidden')
          workSection.classList.add('hidden')
          skillSection.classList.remove('hidden')
          contactSection.classList.add('hidden')
          navlist.classList.add ('hidden')
        }else if(clickedNav == "CONTACT"){
          contactSection.classList.remove('hidden')
          aboutSection.classList.add('hidden')
      workSection.classList.add('hidden')
      skillSection.classList.add('hidden')
      navlist.classList.add ('hidden')
         }else{
          clickedNav.classList.add('hidden')
         }

      }) 
      }

      
      setTimeout(function preloaderTimeOut (){
          preloader.style = "display: none"
      }, 3000)
      
      copyrightFooter.innerHTML = "© " + new Date().getFullYear() + " OmololaBeccaOlaoye"

// when looping through a List(they children are not together in a container),its proper that you call everychild,so the logic can take event on each child
// for(let arrowSelected = 0; arrowSelected < arrowDisplay.length; arrowSelected++){
//     arrowDisplay[arrowSelected].addEventListener("click", e => {
//         let div = arrowDisplay[arrowSelected]
//         if ( div === e.target){
//              arrowDisplay[arrowSelected].classList.remove("fa-chevron-down")
//               arrowDisplay[arrowSelected].classList.add("fa-chevron-up")
//              arrowDisplay[arrowSelected].classList.add("active")
//         }else{
//             arrowDisplay[arrowSelected].classList.remove("active")
//             arrowDisplay[arrowSelected].classList.add("fa-chevron-down")
//         }

//     })


