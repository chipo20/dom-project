
var btnplus=Array.from(document.getElementsByClassName('bouttonplus'))
var btnmoins=Array.from(document.getElementsByClassName('bouttonmoins'))
var total=document.getElementById('total')
var price=Array.from(document.getElementsByClassName('price'))
var qt=Array.from(document.getElementsByClassName('count'))
var delet=Array.from(document.getElementsByClassName('delete'))
var product=Array.from(document.getElementsByClassName('product'))
var like=Array.from(document.getElementsByClassName('far fa-heart'))



for (let i=0;i<btnplus.length;i++)
{

    btnplus[i].addEventListener('click',function(){
        qt[i].innerHTML= Number(qt[i].innerHTML)+1
        clc()
    })

}

for (let i=0; i<btnmoins.length;i++)
{

    btnmoins[i].addEventListener('click',function(){
        if (Number(qt[i].innerHTML)>0 ){
        qt[i].innerHTML= Number(qt[i].innerHTML)-1
        clc()}
        
        })

} 
function clc()

{
    let somme=0;
 for(let i=0;i<price.length;i++) {
 somme=somme+Number(price[i].innerHTML)*Number(qt[i].innerHTML)

}
total.innerHTML=somme

return somme

}

for(let i=0;i<delet.length;i++){

    delet[i].addEventListener('click',function(){
    product[i].remove()
    total.innerHTML=0
})
}

for(let i=0;i<like.length;i++){
like[i].addEventListener('click',function(){ 
    like[i].classList.toggle('fas')

})
}