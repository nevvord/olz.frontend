function toggleHiddenMenu(event, parrentName, ChildName) {
    const toggle = event.target.closest(`.${parrentName}`).querySelector(`.${ChildName}`)
    if(toggle) toggle.hidden = !toggle.hidden
}

function openSideBarMenu(event) {
    const toggle = event.target.closest('.nav-content').querySelector('#nav-toggle-menu')
    if (toggle.style.left !== "0px") {
        toggle.style.left = "0px"
    }else{
        toggle.style.left = "-100%"
    }
}