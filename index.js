


console.log('this is arif');
// dbd85ef8729940fc9e7e103a6af7f1bc
// grab the news container
let newsaccordion = document.getElementById('newsaccordion');

//create a get request
const xhr = new XMLHttpRequest();

xhr.withCredentials = true;
xhr.open("GET", "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw");
xhr.setRequestHeader("x-bingapis-sdk", "true");
xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "9763700017msh230f8d488a5823cp107503jsn8061f4e7baa9");


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let article=json.value;
        console.log(article);
        let newshtml="";
        article.forEach(function(element,index){
            let news=`<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapseOne ${index}">
                                    ${element["name"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsaccordion">
                                <div class="accordion-body">
                                ${element["description"]}.<a href="${element['url']}" traget="_blank"> Read more here</a>
                                    
                                </div>
                            </div>
                        </div>`;
            newshtml += news;
            
        });
        newsaccordion.innerHTML=newshtml;
    }
    else {
        console.log("Some error occured")
    }


}
xhr.send();


