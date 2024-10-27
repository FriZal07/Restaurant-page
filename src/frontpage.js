const loadfrontpage = () => {

    const content = document.querySelector("#content")
    const contentContain = document.createElement('div')
    contentContain.setAttribute("id","content_container")

    contentContain.innerHTML = `<div id="title">Amazing Foods</div>
            <div id="image_grid">
                <img src="../src/img/food1.jpg">
                <img src="../src/img/food2.jpg">
                <img src="../src/img/food3.jpg">
            </div>`
    
    content.appendChild(contentContain);
}

export {loadfrontpage};