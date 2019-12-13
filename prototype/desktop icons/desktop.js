const explorerTitle = document.getElementById("explorer-title");
const explorer = document.getElementById("explorer");
const explorerContent = document.getElementById("explorer-content");
const urlBar = document.getElementById("url-bar");
const searchBtn = document.getElementById("searchBtn");

const iframeBrowser = document.getElementById("browser-iframe");
const iframeProfile = document.getElementById("profile-iframe");

const browserContent = document.getElementById("browser-content");
const profileContent = document.getElementById("profile-content");
const projectContent = document.getElementById("project-content");
const personalContent = document.getElementById("personal-content");
const settingContent = document.getElementById("setting-content");

var maximizeCount = 0;

if (window.innerWidth >= 800){
    document.getElementById("profile").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        profileContent.classList.remove("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        browserContent.classList.add("none");
        explorerTitle.innerText = "Profile";

        if (iframeProfile.src == ''){
            iframeProfile.src = `file:///C:/Users/Raghav/Desktop/projects/portfolio/prototype/profile/index.html`;
        }
    });

    document.getElementById("project").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.remove("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Projects";
    });

    document.getElementById("personal").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.remove("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Personal";
    });

    document.getElementById("browser").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        explorerTitle.innerText = "Browser";
        browserContent.classList.remove("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");

        if (iframeBrowser.src == ""){
            urlBar.value = "https://www.searchencrypt.com/";
            iframeBrowser.src = "https://www.searchencrypt.com/";
        }
    });

    document.getElementById("setting").addEventListener("dblclick",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.remove("none");
        explorerTitle.innerText = "Settings";
    });
}
else{
    document.getElementById("profile").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.remove("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Profile";
    });

    document.getElementById("project").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.remove("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Projects";
    });

    document.getElementById("personal").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.remove("none");
        settingContent.classList.add("none");
        explorerTitle.innerText = "Personal";
    });

    document.getElementById("browser").addEventListener("click",()=>{
        iframeBrowser.src = "https://www.searchencrypt.com/";
        explorer.classList.remove("none");
        explorerTitle.innerText = "Browser";
        browserContent.classList.remove("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.add("none");
    });

    document.getElementById("setting").addEventListener("click",()=>{
        explorer.classList.remove("none");
        browserContent.classList.add("none");
        profileContent.classList.add("none");
        projectContent.classList.add("none");
        personalContent.classList.add("none");
        settingContent.classList.remove("none");
        explorerTitle.innerText = "Settings";
    });
}

document.getElementById("minimize").addEventListener("click",()=>{
    explorer.classList.add("minimize");
    setTimeout(()=>{
        explorer.classList.remove("minimize");
        explorer.classList.add("none");
    }
    ,500);
});

document.getElementById("close-explorer").addEventListener("click",()=>{
    explorerTitle.innerHTML = '';
    browserContent.classList.add("none");
    explorer.classList.add("none");
});

document.getElementById("maximize").addEventListener("click",()=>{
    if (maximizeCount == 0){
        explorer.classList.add("maximize");
        explorerHeight();
        maximizeCount = 1;
    }
    else{
        explorer.classList.remove("maximize");
        explorerHeight();
        maximizeCount = 0;
    }
});

const explorerHeight = () => {
    var height = document.getElementById("explorer").offsetHeight;
    document.getElementById("explorer-content").style.height = `${height - 37}px`;
}

const searchFun = () => {
    const searchUrl = "https://www.searchencrypt.com/search?eq=";
    var urlVal = urlBar.value;
    if (urlVal.substring(0,7) == 'http://' || urlVal.substring(0,8) == 'https://'){
        iframeBrowser.src=`${urlVal}`;
        setTimeout(() => {
            urlBar.value = iframeBrowser.src;
        }, 500);
    }
    else {
        iframeBrowser.src=`${searchUrl}${urlVal}`;
        setTimeout(() => {
            urlBar.value = iframeBrowser.src;
        }, 500);
    }
}

urlBar.onkeydown = (e) => {
    if (e.which == 13){
        searchFun();
    }
}

searchBtn.addEventListener("click",()=>{searchFun();});

window.onresize = explorerHeight;
document.onclick = explorerHeight;
explorerHeight();