const trendingApp = () => {
    let trendingBlogs = [
        {title:'10 Tips On Starting Your Online Business Today.',_id:123},
        {title:'Upcoming Products That Can Take Your Sports Performance',_id:123},
        {title:'5 Unknown Sports From Around The World',_id:123},
        {title:'Are You Fit?',_id:123},
        {title:'How To Make Your Business Succeed in 2020.',_id:123}
    ];

    let url = 'https://sportsapp.co.in/public/blog/?trending=true';
    
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
        trendingBlogs = res.data;
        displayTrendingBlog();
    })
    .catch(err => {
        console.log(err);
    });

    const displayTrendingBlog = () => {
            const trendingBlogsDiv = document.querySelector('.trending-blogs');

            let len = trendingBlogs.length;
            for(let idx = 0 ; idx<len ; idx++){
                let blog = trendingBlogs[idx];

                const tableRow = document.createElement('tr');
                const tableData = document.createElement('td');
                const ahref = document.createElement('a');
                
                let href = 'readblog.html#' + blog._id;

                ahref.setAttribute('href',href);
                ahref.textContent = blog.title ;
                tableData.appendChild(ahref);
                tableRow.appendChild(tableData);
                trendingBlogsDiv.appendChild(tableRow);
            }
    }
}

trendingApp();