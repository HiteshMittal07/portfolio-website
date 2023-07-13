function runtypingEffect(){
    const text='I am Hitesh';
    const typingElement=document.getElementById('typing-text');
    const delay=70;
    typetext(text,typingElement,delay);

}
function typetext(text,typingElement,delay){
    for(let i=0;i<text.length;i++){
        setTimeout(()=>{
            typingElement.textContent += text.charAt(i);
        },delay *i)
    }
}
document.addEventListener('DOMContentLoaded',runtypingEffect);