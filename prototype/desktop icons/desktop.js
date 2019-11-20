const explorerTitle = document.getElementById("explorer-title");
const explorer = document.getElementById("explorer");
var maximizeCount = 0;

document.getElementById("profile").addEventListener("dblclick",()=>{
    explorer.classList.remove("none");
    explorerTitle.innerText = "Profile";
});

document.getElementById("project").addEventListener("dblclick",()=>{
    explorer.classList.remove("none");
    explorerTitle.innerText = "Projects";
});

document.getElementById("personal").addEventListener("dblclick",()=>{
    explorer.classList.remove("none");
    explorerTitle.innerText = "Personal";
});

document.getElementById("browser").addEventListener("dblclick",()=>{
    explorer.classList.remove("none");
    explorerTitle.innerText = "Browser";
});

document.getElementById("setting").addEventListener("dblclick",()=>{
    explorer.classList.remove("none");
    explorerTitle.innerText = "Settings";
});

document.getElementById("minimize").addEventListener("click",()=>{
    explorer.classList.add("minimize");
    setTimeout(()=>{
        explorer.classList.remove("minimize");
        explorer.classList.add("none");
    }
    ,500);
});

document.getElementById("close-explorer").addEventListener("click",()=>{
    explorer.classList.add("none");
});

document.getElementById("maximize").addEventListener("click",()=>{
    if (maximizeCount == 0){
        explorer.classList.add("maximize");
        maximizeCount = 1;
    }
    else{
        explorer.classList.remove("maximize");
        maximizeCount = 0;
    }
});