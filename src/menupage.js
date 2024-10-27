const loadmenupage = () => {

    const content = document.querySelector("#content")
    const contentContain = document.createElement('div')
    contentContain.setAttribute("id","menu_content_container")

    contentContain.innerHTML = `<div id="menu_title">Amazing Foods</div>
            <div id="menu_image_grid">
                <div>
                    <img src="../src/img/food1.jpg">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem officia obcaecati recusandae? Et, facilis. Et voluptatem, magnam numquam, odit, reprehenderit praesentium tempore odio facilis voluptas in eveniet labore ipsa explicabo!</div>
                </div>

                <div>
                    <img src="../src/img/food2.jpg">
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolor rerum voluptates voluptate a doloremque repudiandae animi, illum alias illo, saepe eligendi, mollitia accusamus nemo provident incidunt eos in blanditiis?</div>
                </div>

                <div>
                    <img src="../src/img/food3.jpg">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, in, magni a fugiat possimus nihil amet vel accusantium similique explicabo ducimus. Hic sed maxime quasi commodi cumque, deleniti facere. Itaque.</div>
                </div>

                <div>
                    <img src="../src/img/food4.jpeg">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, in, magni a fugiat possimus nihil amet vel accusantium similique explicabo ducimus. Hic sed maxime quasi commodi cumque, deleniti facere. Itaque.</div>
                </div>
            </div>`
    
    content.appendChild(contentContain);
}

export {loadmenupage};