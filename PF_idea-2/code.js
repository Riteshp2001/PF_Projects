let stars = document.querySelectorAll(".fa-star");
let emoji = document.querySelectorAll(".em");

stars.forEach((stars,index)=>{
    stars.addEventListener("click",()=>{
        updateui(index);
    });
});

function updateui(index){
    stars.forEach((stars,idx)=>{
        if(idx < index+1){
            stars.classList.add("active");
        }
        else {
            stars.classList.remove("active");
        }
    });

    emoji.forEach(emoji=>{
        emoji.style.transform = `translateX(-${index*50}px)`;
    });
};