
const API_KEY = "bWiVzsuqFO4SNtV2ZRlIrH2F8MzazCPv4cqUuiCSQG4";
let articles = [];
let page = 1;
let totalPage = 1;
let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&page_size=10"
);

let menus = document.querySelectorAll("#menu-list button");
menus.forEach((menu) =>
    menu.addEventListener("click", (e) => getNewsByTopic(e)));

const getNews = async () => {
    try {
        let header = new Headers();
        header.append("x-api-key", API_KEY);
        url.searchParams.set("page", page);
        let response = await fetch(url, {
            headers: header
        }); 
        let data = await response.json();
        if (response.status == 200) {
            if (data.total_hits == 0) {
                throw new Error(data.status);
            }

            articles = data.articles;
            console.log("articles", articles);
            totalPage = data.total_pages;
            render();
            renderPagination();
        } else {
            throw new Error(data.message);
        }

    } catch (e) {
        console.log("error object", error.name);
        errorRender(error.message)
    }
};


const getLatestNews = async () => {
    page = 1;
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=10`);

    getNews();
};



const getNewsByTopic = async (event) => {
    let topic = event.target.textContent.toLowerCase();
    page = 1;
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${topic}&page_size=10`);

    getNews();
};

const openSearchBox = () => {
    let inputArea = document.getElementById("input-area");
    if (inputArea.style.display === "inline") {
        inputArea.style.display = "none";
    } else {
        inputArea.style.display = "inline";
    }
};

const searchNews = () => {
    let keyword = document.getElementById("search-input").value;
    page = 1;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
    getNews();
}

const render = () => {
    let resultHTML = articles.map(news => {
            return `<div class="news row">
    <div class="col-lg-4">
      <img
        class="news-img" src="${ news.media ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
          }"/>
    </div>
    <div class="col-lg-8">
      <a class="title" target="_blank" href="${news.link}">${news.title}</a>
      <p>${ news.summary == null || news.summary == "" ? "no contents to show." :
      news.summary.length > 200 ? news.summary.substring(0, 200) + "..."
      : news.summary }</p>
      <div>${news.rights || "no source"} ${moment( news.published_date).fromNow()}</div>
    </div>
  </div>`;
        })
        .join("");

    document.getElementById("news-board").innerHTML = resultHTML;
};

const renderPagination = () => { 
    let paginationHTML = ``;
    let pageGroup = Math.ceil(page / 5);
    let last = pageGroup * 5;
    if (last > totalPage) {
        last = totalPage;
    }
    let first = last - 4 <= 0 ? 1 : last - 4;
    if (first >= 6) {
        paginationHTML = `<li class="page-item" onclick="pageClick(1)">
  <a class="page-link" href='#js-bottom'>&lt;&lt;</a>
</li>
  <li class="page-item" onclick="pageClick(${page - 1})">
  <a class="page-link" href='#js-bottom'>&lt;</a>
</li>`;
    }
    for (let i = first; i <= last; i++) {
        paginationHTML += `<li class="page-item ${i == page ? "active" : ""}">
   <a class="page-link" href='#js-bottom' onclick="pageClick(${i})">${i}</a>
   </li>`
    }
    if (last < totalPage) {
        paginationHTML += `<li class="page-item" onclick="pageClick(${page + 1})"> 
    <a class="page-link" href='#js-program-detail-bottom'>
   &gt;</a>
</li>
<li class="page-item" onclick="pageClick(${totalPage})">
  <a class="page-link" href='#js-bottom'>&gt;&gt;</a>
</li>`;
    }
    document.querySelector("ul.pagination").innerHTML = paginationHTML;
};


const pageClick = (pageNum) => {
    page = pageNum;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    getNews();

}

const errorRender = (message) => {
    document.getElementById("news-board").innerHTML = `<h3 class="text-center alert alert-danger mt-1">${message}</h3>`;
};
getLatestNews();

