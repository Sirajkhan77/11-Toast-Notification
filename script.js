

let SUCCESS='<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let ERROR='<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error!';
let INVALID='<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';


const texBox = document.getElementById("toast-box");
function showToast(msg){
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML=msg;
    texBox.appendChild(toast);

    if (msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('warning');
    }

    setTimeout(()=>{
        toast.remove(); 
    },6000);
}
