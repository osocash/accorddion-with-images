var quest=document.getElementsByClassName("quest");

for(i=0;i<quest.length;i++)
{
    
    quest[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var ans = this.nextElementSibling;
        console.log(ans);
        ans.classList.toggle("show");
    });
}


