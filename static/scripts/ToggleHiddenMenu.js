function toggleHiddenMenu(event, parrentName, ChildName) {
    const toggle = event.target.closest(`.${parrentName}`).querySelector(`.${ChildName}`)
    if(toggle) toggle.hidden = !toggle.hidden
}