const explorerTitle = document.getElementById("explorer-title");

document.getElementById("profile").addEventListener("dblclick",()=>{
    document.getElementById("explorer").classList.remove("none");
    explorerTitle.innerText = "Profile";
});

document.getElementById("project").addEventListener("dblclick",()=>{
    document.getElementById("explorer").classList.remove("none");
    explorerTitle.innerText = "Projects";
});

document.getElementById("personal").addEventListener("dblclick",()=>{
    document.getElementById("explorer").classList.remove("none");
    explorerTitle.innerText = "Personal";
});

document.getElementById("browser").addEventListener("dblclick",()=>{
    document.getElementById("explorer").classList.remove("none");
    explorerTitle.innerText = "Browser";
});

document.getElementById("setting").addEventListener("dblclick",()=>{
    document.getElementById("explorer").classList.remove("none");
    explorerTitle.innerText = "Settings";
});

document.getElementById("minimize").addEventListener("click",()=>{
    document.getElementById("explorer").classList.add("minimize");
    setTimeout(()=>{
        document.getElementById("explorer").classList.remove("minimize");
        document.getElementById("explorer").classList.add("none");
    }
    ,500);
});

document.getElementById("close-explorer").addEventListener("click",()=>{
    document.getElementById("explorer").classList.add("none");
});