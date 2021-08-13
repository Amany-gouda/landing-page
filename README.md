# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions
* build the navbar menue
    first i ued a for loop to loop over the sections to get the sectin id and *data-nav* attribute to use them to creat the anchor element 
    using the literal templates.
    then i used the **creatnewfragment** to append all the li elements to this fragment then appen this fragment to the ul element to improve the performance of the code.

* activate the section in the viewport
    i used IntersectionObserver to check if the section in the viewport if it true add the "your-active-class" to this section 
    first i tried the **intersectionObserver** without the threshold option but i found that there was 2 sections
    had the active class at the same time so when i tried the using threshold:0.5 it works perfectly as the 
    callback function dosen't run untill the section visibility passes 50%.
    
    and inside the function i added the part of the active link check if this li is for the activated section if it true it will add the **link__active** to this li element.

* smooth scroll to the related section 
  the function **smoothScroll** created to prevent the default happened when the user click on the nav item and replace this default action with the **smooth behavior** by adding scrollIntoView({"behavior":"smooth"}) to the section related to the clicked nav item.
