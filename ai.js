let backbut=document.querySelector(".nano");
let body=document.querySelector("body")
let container=document.querySelector(".container")
let generate=document.querySelector(".generate")
let color=["rgb(230, 243, 243)","#FFA07A","#8B0000","#FF00FF","#7FFF00","#006241","#66FF00","#4D5D53","#800080","#DDA0DD","#1d1160","linear-gradient(90deg, #0700b8 0%, #00ff88 100%)","linear-gradient(90deg, #4b6cb7 0%, #182848 100%)","linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)","linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)","linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)","linear-gradient(90deg, #1CB5E0 0%, #000851 100%)","linear-gradient(90deg, #fcff9e 0%, #c67700 100%)","linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)","linear-gradient(90deg,rgba(42, 48, 155, 1) 0%, rgba(164, 87, 199, 1) 50%, rgba(237, 83, 147, 1) 100%)","linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)","radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)"," linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)","radial-gradient(circle,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)"]
let color2=["rgb(164, 167, 167)","#a05e44","#530909","#791079","#51960d","#0e1f19","#162e06","#0e1310","#1d081d","#461a46","#150e3d","linear-gradient(90deg, #0700b8 0%, #00ff88 100%)","linear-gradient(90deg, #4b6cb7 0%, #182848 100%)","linear-gradient(90deg, #FDBB2D 0%, #197475 100%)","linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)","linear-gradient(90deg, #FDBB2D 0%, #281649 100%)","linear-gradient(90deg, #154552 0%, #0c0f29 100%)","linear-gradient(90deg, #4c4e17 0%, #3d2b10 100%)","linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgb(46, 102, 69) 50%, rgba(237, 221, 83, 1) 100%)","linear-gradient(90deg,rgba(42, 48, 155, 1) 0%, rgba(164, 87, 199, 1) 50%, rgba(237, 83, 147, 1) 100%)","linear-gradient(90deg,rgb(4, 4, 20) 0%, rgb(7, 7, 49) 35%, rgb(12, 67, 78) 100%)","radial-gradient(circle,rgb(27, 44, 129) 0%, rgb(105, 24, 40) 100%)"," linear-gradient(90deg,rgb(51, 22, 70) 0%, rgb(82, 33, 33) 50%, rgb(92, 63, 23) 100%)","radial-gradient(circle,rgb(66, 43, 53) 0%, rgb(51, 63, 77) 100%)"]

let i=-1
let j=color.length-1

backbut.addEventListener("click",function(){
 if(i<color.length){
    i++
    j--
}
else if(i=color.length){
    i=-1
    j=color.length-1

}

    document.querySelector(".nano").style.background=color[i+1]
    body.style.background=color[i]
    container.style.background=color2[i]
generate.style.background=color[j]
    
   
}
)
*/-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let textarea=document.querySelector("textarea");
let but=document.querySelector(".img");
let text=["Hi give a image butifull image................ ","Give a image of tiger........... ","give a flower image.......","give a mango.......... ","give mothing ","ho ho ho ho ho sky.........","girl image "," Give a cool image......."]
let l=-1
but.addEventListener("click",function(){
    
if(l<text.length){
    l++
}else if(l=text.length){
    l=-1
}
    textarea.innerText=text[l]
})
*/-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let button=document.querySelector("button")
let imgbox1=document.querySelector(".div1")
let imgbox2=document.querySelector(".div2")
let imgbox3=document.querySelector(".div3")
let select1=document.querySelector("#select1")
let select2=document.querySelector("#select2")
let se1=0
let se2=0
select1.addEventListener("change",function(event){
   
    if(event.target.value=="a"){
        se1="a"
    }
    else if(event.target.value=="b"){
        se1="b"
    }
    else if(event.target.value=="c"){
        se1="c"
    }
    else if(event.target.value=="d"){
        se1="d"
    }
    console.log(se1)
})
select2.addEventListener("change",function(event){
   
    if(event.target.value=="a2"){
        se2="a2"
    }
    else if(event.target.value=="b2"){
        se2="b2"
    }
    else if(event.target.value=="c2"){
        se2="c2"
    }
    else if(event.target.value=="d2"){
        se2="d2"
    }
    console.log(se2)
})
let ttext=0

button.addEventListener("click",function(){
    switch(l){
        case -1: ttext="a0" 
        
        break;
         case 0: ttext="a1" 
       
        break;
         case 1: ttext="a2" 
       
        break;
         case 2: ttext="a3" 
        
        break;
         case 3: ttext="a4" 
        
        break;
         case 4: ttext="a5" 
       
        break;
         
         case 5: ttext="a6" 
       
        break;
         
         case 6: ttext="a7" 
       
        break;
         
         case 7: ttext="a8" 
       
        break;
         case 7: ttext="a9" 
       
        break;
        

                
    }
    console.log(ttext)
})

*/-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
generate.addEventListener("click",function(){
   if(l==-1||se1=="a"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==7||se1=="a"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==3||se1=="a"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==0||se1=="a"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/32929231/pexels-photo-32929231.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
   if(l==6||se1=="a"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/33724886/pexels-photo-33724886.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
    if(l==1||se1=="a"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/8034840/pexels-photo-8034840.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29014059/pexels-photo-29014059.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==5||se1=="a"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/37059041/pexels-photo-37059041.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/4090418/pexels-photo-4090418.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==2||se1=="a"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/36898613/pexels-photo-36898613.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"
   }
    if(l==4||se1=="a"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"
   }
   /*----------------*/
    if(l==-1||se1=="b"||se2=="b2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/37296736/pexels-photo-37296736.png)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/31350294/pexels-photo-31350294.jpeg)"
   }
   if(l==7||se1=="b"||se2=="b2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5480839/pexels-photo-5480839.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
   }
   if(l==3||se1=="b"||se2=="b2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
   }
   if(l==0||se1=="b"||se2=="b2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/27356567/pexels-photo-27356567.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
   if(l==6||se1=="b"||se2=="b2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/27356567/pexels-photo-27356567.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
    if(l==1||se1=="b"||se2=="b2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/462017/pexels-photo-462017.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5232958/pexels-photo-5232958.jpeghttps://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==5||se1=="b"||se2=="b2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
   }
    if(l==2||se1=="b"||se2=="b2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"
   }
    if(l==4||se1=="b"||se2=="b2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/31317377/pexels-photo-31317377.jpeg"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"}
   
/*====================*/
 if(l==-1||se1=="c"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==7||se1=="c"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==3||se1=="c"||se2=="c2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==0||se1=="c"||se2=="c2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/32929231/pexels-photo-32929231.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
   if(l==6||se1=="c"||se2=="c2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/33724886/pexels-photo-33724886.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
    if(l==1||se1=="c"||se2=="c2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/8034840/pexels-photo-8034840.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29014059/pexels-photo-29014059.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==5||se1=="c"||se2=="c2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/37059041/pexels-photo-37059041.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/4090418/pexels-photo-4090418.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==2||se1=="c"||se2=="c2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/36898613/pexels-photo-36898613.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"
   }
    if(l==4||se1=="c"||se2=="c2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"}

   /*----------------*/
    if(l==-1||se1=="c"||se2=="d2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/37296736/pexels-photo-37296736.png)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/31350294/pexels-photo-31350294.jpeg)"
   }
   if(l==7||se1=="c"||se2=="d2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5480839/pexels-photo-5480839.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
   }
   if(l==3||se1=="c"||se2=="d2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
   }
   if(l==0||se1=="c"||se2=="d2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/27356567/pexels-photo-27356567.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
   if(l==6||se1=="c"||se2=="d2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/27356567/pexels-photo-27356567.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
    if(l==1||se1=="c"||se2=="d2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/462017/pexels-photo-462017.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5232958/pexels-photo-5232958.jpeghttps://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==5||se1=="c"||se2=="d2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/8034840/pexels-photo-8034840.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/4090418/pexels-photo-4090418.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==2||se1=="c"||se2=="d2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"
   }
    if(l==4||se1=="c"||se2=="d2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/31317377/pexels-photo-31317377.jpeg"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36383311/pexels-photo-36383311.jpeg)"
   }
   /*=============*/
   if(l==-1||se1=="d"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/34649676/pexels-photo-34649676.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/1276133/pexels-photo-1276133.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/4441983/pexels-photo-4441983.jpeg)"
   }
   if(l==7||se1=="d"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==3||se1=="d"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/30144941/pexels-photo-30144941.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/29638490/pexels-photo-29638490.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/5989676/pexels-photo-5989676.jpeg)"
   }
   if(l==0||se1=="d"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/32929231/pexels-photo-32929231.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
   if(l==6||se1=="d"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/35182285/pexels-photo-35182285.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/33724886/pexels-photo-33724886.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/28731911/pexels-photo-28731911.jpeg)"
   }
    if(l==1||se1=="d"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/8034840/pexels-photo-8034840.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/36613128/pexels-photo-36613128.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==5||se1=="d"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/37059041/pexels-photo-37059041.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/4090418/pexels-photo-4090418.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/5408793/pexels-photo-5408793.jpeg)"
   }
    if(l==2||se1=="d"||se2=="a2"){
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/5414576/pexels-photo-5414576.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/4441983/pexels-photo-4441983.jpeg)"
   }
    if(l==4||se1=="d"||se2=="a2"){
document.querySelector(".div3").style.backgroundImage="url(https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg)"
document.querySelector(".div1").style.backgroundImage="url(https://images.pexels.com/photos/32208370/pexels-photo-32208370.jpeg)"
document.querySelector(".div2").style.backgroundImage="url(https://images.pexels.com/photos/35782269/pexels-photo-35782269.jpeg)"
   }
}
)