const loadaboutpage = () => {

    const content = document.querySelector("#content")
    const contentContain = document.createElement('div')
    contentContain.setAttribute("id","about_content_container")

    contentContain.innerHTML = `<div id="about_title">About Us</div>
            <div id="about_info_grid">
                <img id="about_image" src="../src/img/cook.jpg">
                <div id="about_title_info">Our Chef</div>
                <div id="about_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam vel voluptate distinctio dolorum. Quam fugit impedit commodi officia eum. Nesciunt quo omnis ipsam odio vero corporis incidunt consequatur dignissimos.</div>
            </div>`
    
    content.appendChild(contentContain);
}

export {loadaboutpage};