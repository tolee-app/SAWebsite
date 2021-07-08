const linkToDetails = (blogID) => {
    window.location.href = 'readblog.html' + '#' + blogID;
}

const app = () => {

    let blogs = [];

    let url = 'https://sportsapp.co.in/public/blog';

    let options = {
            method:'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };


    fetch(url, options)
    .then(res=>{
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    })
    .then((res)=>{
        blogs = res.data;
        displayBlogs();
    })
    .catch(err=>{
        console.log(err)
    });

    const seperatorContent = () => {
        return ` 
        <div class="separator">
            <hr class="separator-hr" style="position: relative;">
        </div>` ;
    } 



    const blogContent = (blog) => {
        
        let date = new Date(blog.createdAt);
        const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        let date_updated = date.getDate() +' '+ monthNames[date.getMonth()] +' ' + date.getFullYear();

        return `
        <a href = "readblog.html#`
        +
        blog._id
        +
        ' " > '
        + 
        '<h2 class="blog-title">'+
        blog.title 
        +
        '</h2>'
        +
        `</a>
        
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
            blog.description 
        +

        `<button
            class="read-more-btn"
            onclick="linkToDetails('` + blog._id + `')"
        >
            Read More
        </button>
        </p>
       `
    }


    const displayBlogs = () => {
        let len = blogs.length;

        const blogContainer = document.querySelector('.blog-container');
        blogContainer.innerHTML=``;

        if(len === 0){
            blogContainer.innerHTML=`<p class="no-blog-text" style="color:white;"><span>We are busy writing for you, till then..<br> <b>Khelte Raho India</b></span></p>`;
        }
        else{
            blogContainer.innerHTML=``;
        }

        for(let idx = 0 ; idx<len; idx++){
            let blog = blogs[idx];

            const seperatorDiv = document.createElement('div');
            seperatorDiv.setAttribute('class','seperator');
            seperatorDiv.innerHTML = seperatorContent();

            const blogDiv = document.createElement('div');
            blogDiv.classList.add("blog-active");
            blogDiv.innerHTML= blogContent(blog);
        
            blogContainer.appendChild(blogDiv);
            blogContainer.appendChild(seperatorDiv);
        }
    }

    document.querySelector(".categories").addEventListener("click", (e) => {
        let category = e.target.dataset.category;


            
        let categoryUrl = 'https://sportsapp.co.in/public/blog/?category=' + category ; 
        // let categoryUrl = 'https://beta.sportsapp.co.in/public/blog'; 

        if(category==="all"){
            categoryUrl = 'https://api.sportsapp.co.in/public/blog' 
        }

        
        let options = {
                method:'GET',
                mode: 'cors'
            };
    
    
        fetch(categoryUrl, options)
        .then(res=>{
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(res.status);
            }
        })
        .then((res)=>{
            // console.log(res)
            blogs = res.data;
            displayBlogs();
        })
        .catch(err=>{
            console.log(err)
        });
    })

}

app();

