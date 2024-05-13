
alert("Please upvote and follow if you ike it ")
window.onload = ()=>{
    
    setTimeout(function(){
        loader.style.display = 'none';
        window.scrollTo(0,0);
        
    },1000);
    var nav = false;
    var ddown = false;
    var skds = 0;
    var smen = 0;
        var ditems = document.querySelectorAll(".dstnitem"); navbutton.addEventListener("click",function(){
        if(nav == false){
        bar1.style.transform = "rotate(-45deg)";
        bar1.style.marginTop = "40%";
        bar2.style.marginLeft = '-6vh';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(45deg)';
        bar3.style.marginTop = "-40%";
        document.body.style.setProperty("--widthnav", " 70vw");
        document.body.style.setProperty('--navscale','scale(1)');
        nav = true;
        }
        
        else if(nav == true){
        bar1.style.transform = "rotate(0deg)";
        bar1.style.marginTop = "1.1vh";
        bar2.style.marginLeft = '2vh';
        bar2.style.opacity = '1';
        bar3.style.transform = 'rotate(0deg)';
        bar3.style.marginTop = "1.1vh";
        document.body.style.setProperty("--widthnav", "0vw");
        document.body.style.setProperty('--navscale','scale(0)');
        nav = false;
        }
        
        
        
    });
    
    
    var carscr = undefined; 
    
    
    window.addEventListener("scroll",function(){
        carscr = carousel1.getBoundingClientRect().top;
        if(carscr <= -window.innerHeight/2){
            navbar.style.background = '#333';
            document.querySelector(".fa-angle-double-up").style.display = 'block';
        }
        else{
            navbar.style.background = '#3331';
            document.querySelector(".fa-angle-double-up").style.display = 'none';
        }
        
        bar1.style.transform = "rotate(0deg)";
        bar1.style.marginTop = "1.1vh";
        bar2.style.marginLeft = '2vh';
        bar2.style.opacity = '1';
        bar3.style.transform = 'rotate(0deg)';
        bar3.style.marginTop = "1.1vh";
        navbar.style.top = '-8vh';
        setTimeout(function(){
            navbar.style.top = '0vh';
        },1000);
        document.body.style.setProperty("--widthnav", "0vw");
        document.body.style.setProperty('--navscale','scale(0)');
    });
    
    
    destination.addEventListener("click",function(){
        
        
        if(ddown == false){
            document.querySelector(".fa-arrow-down").style.color = "#ff7400";
            ddown = true;
            dstnitems.style.height = "23vh";
            for (var i = 0; i < ditems.length; i++) {
           ditems[i].addEventListener("click",function(){
             dstnitems.style.height = "0vh";
             dstn.innerHTML = this.innerHTML ;            document.querySelector(".fa-arrow-down").style.color = "#fff";
           });
        }
            
        }
        
        else{

            ddown = false;
            document.querySelector(".fa-arrow-down").style.color = "#222";
            dstnitems.style.height = " 0vh";
        }
    });
    
    document.querySelectorAll(".fa-chevron-up")[0].addEventListener("click",function(){
        smen += 1;
        tsa.innerHTML = smen;
    });
    
    document.querySelectorAll(".fa-chevron-up")[1].addEventListener("click",function(){
        skds += 1;
        tsk.innerHTML = skds;
    });
    
    document.querySelectorAll(".fa-chevron-down")[0].addEventListener("click",function(){
        smen -= 1;
        if(smen < 0){
            smen = 0;
        }
        tsa.innerHTML = smen;
    });
    
    document.querySelectorAll(".fa-chevron-down")[1].addEventListener("click",function(){
        skds -= 1;
        if(skds < 0){
            skds = 0;
        }
        tsk.innerHTML = skds;
        
    });
    
    
    var bookmarks = document.querySelectorAll(".fa-bookmark");
    for(var i = 0; i < bookmarks.length; i++){
        bookmarks[i].addEventListener("onclick",function(){
            if(this.style.color == "#aaa"){
                this.style.color = "#ff7400";
            }
        });
    }
    
    var pdind = 0;
    var pdslides = document.querySelectorAll(".pdcitem");
    
    pdslides[0].style.opacity = "1";
    pdslides[0].style.zIndex = "10";
    pdnext.addEventListener("click",function(){
        pdind += 1;
        if(pdind == 2){
            this.style.display = 'none';
        }
        pdprev.style.display = 'block';
        for(var i = 0; i < pdslides.length; i++){
            pdslides[i].style.opacity = "0";
            pdslides[i].style.zIndex = "0";
        }
        pdslides[pdind].style.opacity = '1';
        pdslides[pdind].style.zIndex = "10";
        this.style.color = "#ff7400";
        setTimeout(function(){
            pdnext.style.color = '#333';
        },1000)
    });
    
    pdprev.addEventListener("click",function(){
        pdind -= 1;
        if(pdind == 0){
            this.style.display = 'none';
        }
        pdnext.style.display = "block";
        for(var i = 0; i < pdslides.length; i++){
            pdslides[i].style.opacity = "0";
            pdslides[i].style.zIndex = "0";
        }
        pdslides[pdind].style.opacity = '1';
        pdslides[pdind].style.zIndex = "10";
        this.style.color = "#ff7400";
        setTimeout(function(){
            pdprev.style.color = '#333';
        },1000)
    });
    
            
    
    
     msgs = document.querySelectorAll(".lcbt");
     for(var i = 0; i < msgs.length; i++){
         msgs[i].addEventListener("click",function(){
             alert("Services unavailable due to COVID19....#Stay Home Stay Safe   go karuna");
         });
     }
    
    
    
    document.querySelector(".fa-angle-double-up").addEventListener("click",function(){
        window.scrollTo(0,0);
    });
    
    
    
    AOS.init({
    duration: 1500,
    delay: 300,
    });
    
    
    
    
}