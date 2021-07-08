const app = () => {
    let blogID = window.location.hash.substring(1);

    let blog = {
        _id:'123',
        title:'Title of blog',
        description:'ashdsjadsakdsfie',
        hitCounter:123,
        contentHtml:'<span style="width: 3rem; font-size: 400%; line-height: 80%; float: left;">T</span>deritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. <br> ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. <br> ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum.<br> <span style="display: block;"><img src="./img/beckham.jpg"></span>ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident<br> <h3 style="color: white;">Lets take a look at:</h3> </p> <p style="color: white;">sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. <br> ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum.<br> ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum. ritn voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. nderit in voluptate velit essem id est laborum',
        tags:['tag1', 'tag2', 'tag3'],
        createdAt:'14-4-20',
        interactiveContentUrl:'./img/blog-img.jpg'
    };


    let url = 'https://sportsapp.co.in/public/blog/?id=' + blogID ;

    
    let options = {
            method:'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };

    fetch(url,options)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    })
    .then(res => {
        blog = res.data;
        displayBlog();
        similarApp(blog.tags,blog._id);
    })
    .catch(err => {
        console.log(err);
    });



    const categoryContent = (tags) =>{
        let content = ``;
        tags.forEach(tag => {
            content += `<p class="tag">` + tag + `</p>`
        })
        return content;
    }


    const blogContent = () => {

        document.querySelector(".location-tag-blogname").innerHTML = ``+blog.title+``;

        let category = categoryContent(blog.tags);
        let content = decodeURIComponent(escape(atob(blog.contentHtml)));
        let date = new Date(blog.createdAt);

        const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

        let date_updated = date.getDate() +' '+ monthNames[date.getMonth()] +' ' + date.getFullYear();

        return `
        <h2 class="blog-detail-title">`
        + 
            blog.title 
        +
        `</h2>
        
        <div class="author-container active-text">
            <div class="author">
                <img class="author-image" src="./assets/logo_with_name.png" alt="logo">
            </div>
            <div class="blog-date">
                <p>`
                +
                    date_updated
                +
                `</p>
            </div>
        </div>

        <div class="img-div">
        <a href = "https://play.google.com/store/apps/details?id=in.co.sportsapp.sportsapp" target="_blank">
            <img class="active-img"src="`
                + 
                    blog.previewInteractiveContentUrl

                +
            `">
            </a>
        </div>
        
        <p id="add-text"class="active-text">`
        + 
            content
        +
        `</p>

        <div class="blog-category active-text">
            <p>In Category: </p>`
            +
                category    
            +
        `</div>`
    }

    const displayBlog = () => {
            const detailBlogContainer = document.querySelector('.blog-details-container');
            detailBlogContainer.innerHTML = blogContent();

            
    }

}

app();