var btn_apri=document.getElementById('apri');
var btn_plus=document.getElementById('plusSize');
var btn_minus=document.getElementById('minusSize');
var btn_colora=document.getElementById('colora');
var btn_mostra=document.getElementById('mostra');
var btn_nascondi=document.getElementById('nascondi');
var btn_maiuscolo=document.getElementById('maiuscolo');
var links=document.querySelectorAll('#todo ul li');

var tendina=document.getElementById('tendina');
var btn_flag=true;
var link_flag=false;
for(let i=0; i<links.length;i++)
{
links[i].addEventListener('click',sottolinea);
}
btn_apri.addEventListener('click',mostra);
btn_apri.addEventListener('focus',function(){
    btn_apri.style.backgroundColor="cyan";
});
btn_apri.addEventListener('blur',function(){
    btn_apri.style.backgroundColor="blue";
});

btn_plus.addEventListener('click',function(){
    document.getElementById('testo').style.fontSize="10rem";

});
btn_minus.addEventListener('click',function(){
    document.getElementById('testo').style.fontSize="3rem";

});
btn_colora.addEventListener('click',function(){
    document.getElementById('testo').style.color="red";

});
btn_mostra.addEventListener('click',function(){
    document.getElementById('testo').style.display="block";

});
btn_nascondi.addEventListener('click',function(){
    document.getElementById('testo').style.display="none";

});
btn_maiuscolo.addEventListener('click',function(){
    document.getElementById('testo').style.textTransform="uppercase";

});


function mostra(){
    
    if(!btn_flag) {
        tendina.style.display='none';
        btn_flag=true;
        
    }
    else {
        tendina.style.display='block';
        btn_flag=false;
    }

}
function sottolinea()
{
    if(!link_flag){
        link_flag=true;
        this.style.textDecoration="line-through";
        this.style.color="gray";
    }
    else{
        link_flag=false;
        this.style.textDecoration="none";
        this.style.color="black";
    }    
}