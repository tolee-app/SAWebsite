const similarApp = (tags, blogID) => {


    let similarBlogs = [];

    let url = 'https://sportsapp.co.in/public/blog/?blog_id='+ blogID +'&tags='+JSON.stringify(tags);
    
    console.log(url);
    
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
        similarBlogs = res.data;
        displaysimilarBlog();
    })
    .catch(err => {
        console.log(err);
    });

    const displaysimilarBlog = () => {
            const similarBlogContainer = document.querySelector('.similar-blogs-container');
            const similarBlogsDiv = document.querySelector('.similar-blogs');

            let len = similarBlogs.length;
            
            if(len===0)
            {
                similarBlogContainer.style.display="none";
                similarBlogContainer.querySelector('hr').style.display="none";
            }
            else{
                similarBlogContainer.style.display="flex";
            }
            
            for(let idx = 0 ; idx<len ; idx++){
                let blog = similarBlogs[idx];

                const tableRow = document.createElement('tr');
                const tableData = document.createElement('td');
                const ahref = document.createElement('a');
                ahref.onclick = ()=>{
                    document.location = ahref.href;
                    document.location.reload();
                }
                let href = '#' + blog._id;
                ahref.setAttribute('href',href);
                ahref.textContent = blog.title;
                tableData.appendChild(ahref);
                tableRow.appendChild(tableData);
                similarBlogsDiv.appendChild(tableRow);
            }
    }
}

