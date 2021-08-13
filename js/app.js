

/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll("section"); //get all the sections elements 
let ulList=document.getElementById("navbar__list"); //get the ul element to append the li elements inside it 
const liItems=ulList.children;

// build the nav
let newfragment=document.createDocumentFragment(); //creat new fragment to append all the li elements inside it to improve the performance.
//using for of loop from the Es6 
for(const section of sections){ //this loop to loop over the sections to get the id and the data-nav attribute values.
    let liElement=document.createElement("li"); //creat the li elements for the list
    let ahref=section.getAttribute("id"); //get the id value of the section to use it in the anchor element href attribute.
    let atext=section.getAttribute("data-nav"); //get the data-nav value of the section to use it in the anchor element text to appear in the navbar.
    liElement.innerHTML=`<a class="menu__link" href="#${ahref}"> ${atext} </a> ` ; //using template literals to creat the anchor element and using innerhtml to put the <a> inside the li element.
    newfragment.appendChild(liElement);
}
ulList.appendChild(newfragment); // append the newfragment to the ul element to improve the performance of the code.

// Add class 'active' to section when near top of viewport

/* i understood the consept of the intersectionObserver from these two links
    (https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/
        and  https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and tried to apply it in this part of the code to 
        add the active class to the section in the view port )*/

const options={threshold:0.5};     /* because i want the callback() run when the section visibility passes 50%.
                                      first i tried the intersectionObserver without the threshold option but i found that there was 2 sections
                                      had the active class at the same time so when i tried the using threshold:0.5 it works perfectly as the 
                                      callback function dosen't run untill the section visibility passes 50%.*/ 

let observer= new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {

         if (entry.isIntersecting){ //check if the section is in the viewport.

              entry.target.classList.add("your-active-class"); //if it is true add the class "your-active-class" to the section 
        
              for(liItem of liItems){
                  if(liItem.innerText===entry.target.getAttribute("data-nav")){ //check if this li is for the activated section
                      liItem.classList.add("link__active");  //if it true add the class link__active i created in css file to this li
                  }
                  else{
                    liItem.classList.remove("link__active"); //if it false remove the link__active class from it
                  }
              }
         }
         else{
            entry.target.classList.remove("your-active-class");// if it false (the section is not visible in the viewport) remove the class "your-active-class"from this section
        }
       
    });
},options);
for(section of sections){  //loop over the sections 
    observer.observe(section);
}

// Scroll to anchor ID using scrollTO event
let smoothScroll=event=>{
    event.preventDefault(); //prevent the default action happened when we click on the navitem.
   let sectionId = event.target.innerText.toLowerCase().replace(" ", "");  //get the id for the section related to  the clicked anchor
   let targetedSection=document.getElementById(sectionId);//get the targeted section 
   targetedSection.scrollIntoView({"behavior":"smooth"}); /*add (scrollIntoview) to the section to make the scroll behavior smooth 
                                                           first i used scrollTo() but it wasn.t working so i replaced it with the scrollintoview*/
                                                    
};

for(const liItem of liItems){
    liItem.addEventListener("click",smoothScroll); //adding eventlistener to all the li elements when the user click on the li item in the navbar make the scroll smooth 
};



