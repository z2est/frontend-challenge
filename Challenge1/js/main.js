"use strict";

window.onload = function() {
    
    const navbarMenu = document.querySelectorAll(".navbar__menu li");
    const menuLength = navbarMenu.length;
    console.log(navbarMenu);
    
    if(menuLength > 0){
        
        for(let obj=0; obj < menuLength; obj++){
            console.log("mememem");
            navbarMenu[obj].addEventListener("click", function() {
                /**
                 * 기존 selected가 있었던 것을 지운다.
                 */
                for(let i=0; i<menuLength; i++){
                navbarMenu[i].classList.remove("selected");
                }
                
                // selected class가 모두 사라졌으므로 선택된 태그에 selected를 추가한다.
                this.classList.add("selected");
                
            });
        }
    }
}

