let main = document.querySelectorAll(".main_text");     /* queryselectorAll shows all the objects as a nodelist, so we have to make it an array and map it to show separately  */
let arr = Array.from(main);

arr.map((item1)=>{
    
    let count = -100;
    function haha(){
        if (count < item1.dataset.haha) {
            count++
            item1.innerHTML = count;        /* it is not main.innterhmtl because main would show a nodelist */
        } 
    }
    setInterval(()=>{
        haha();
        
    },10000 / item1.dataset.haha)      /* all the numbers divided with the same number so they end all together */
})






