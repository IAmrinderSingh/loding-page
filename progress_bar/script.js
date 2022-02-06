function progress(){
    var progress=document.getElementById('progress');
    var percent=document.getElementById('progresscount')
    var counter=0;
    var prg=0;
    var interval=setInterval(frame,30);
    function frame(){
        if(prg===100&&counter===100){
            clearInterval(interval);
        }
        else{
            prg+=1;
            counter+=1;
            progress.style.width=prg+"%";
            percent.innerHTML=counter+"%";
        }
    }
}
progress();