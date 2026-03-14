
fetch("data/news.json")
.then(res=>res.json())
.then(data=>{

let container=document.getElementById("news-container");

data.forEach(news=>{

container.innerHTML+=`

<div class="news-card">

<img src="${news.image}">

<h3>${news.title}</h3>

<p>${news.desc}</p>

<a href="${news.link}">पूरा पढ़ें</a>

</div>

`;

});

});
