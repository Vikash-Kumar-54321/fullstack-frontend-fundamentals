  let butt=document.getElementsByTagName("button")
    butt[0].classList.add("but")
    let butClass=document.getElementsByClassName("but")
    butClass[0].style.color="red"
    butClass[0].style.padding="10px"
    butClass[0].style.border="2px";


    //randomColor generator function
    function randomColor(){
        let cons="#"
        let vari="0123456789ABCDEF"
        for(let i=0;i<6;i++){
            cons=cons+(vari[Math.floor(Math.random()*16)])
        }
        return cons;
    }

    let eve=butClass[0].addEventListener("click",changeColor)
    function changeColor(){
        let bg=document.getElementsByTagName("body")
        bg[0].style.backgroundColor=randomColor()
        butClass[0].style.backgroundColor=randomColor()
        butClass[0].style.color=randomColor()
    }
