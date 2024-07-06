export const showAlert = (msg, color) =>{
    const bg = color==="green"?"#16a34a":"#dc2626";
    const alert = document.getElementById('alert');
    alert.style.backgroundColor = bg;
    alert.style.right = "0px";
    alert.innerHTML = msg;

    setTimeout(() => {
        if(window.screen.width>"786px"){
            alert.style.right = "-25%";
        }
        else{
            alert.style.right = "-100%";
        }
    }, 2500);
}
