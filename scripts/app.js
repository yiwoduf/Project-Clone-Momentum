const title = document.querySelector("h1.is-title");
title.style.color = "white";

function handleTitleClick() {
    console.log("[!] Title was clicked!");
    console.log(title.style.color);
    if (title.style.color == "white") {
        title.style.color = "blue";
    }
    else if (title.style.color == "blue") {
        title.style.color = "red";
    }
    else if (title.style.color == "red") {
        title.style.color = "white";
    }
    else {
        console.log("[!] Title was clicked!");
    }

}

title.addEventListener("click", handleTitleClick); // 자바스크립트가 타이틀에 대한 어떠한 이벤트를 듣게 한다. 그 이벤트는 'click' 이 되는 것이다.
                                                  // 클릭을 했을 경우 handleTitleClick() 이 콜 된다.
// 나중에 removeEventLister를 할 수 있기에 조금 더 유용하게 쓸 수 있다.

// title.onClick = handleTitleClick();