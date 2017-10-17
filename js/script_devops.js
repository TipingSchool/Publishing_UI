var req = new XMLHttpRequest();
req.open("GET", "http://localhost:4000/feeds/published/devops", true);
req.send();
req.onload = function(){
   let json = JSON.parse(req.response);
    var len = json.length;
    let imageArray = ["./images/Devops/Devops1.png","./images/Devops/Devops2.png", "./images/Devops/Devops3.png", "./images/Devops/Devops4.png", "./images/Devops/Devops5.png", "./images/Devops/Devops6.png", "./images/Devops/Devops7.png", "./images/Devops/Devops8.png", "./images/Devops/Devops9.png", "./images/Devops/Devops10.png", "./images/Design/Design11.png"];
    let imageArrayLength = imageArray.length;
    for(var i = 0; i < len; i++){
        if(len > 0){
            var cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "col-md-4 col-sm-4 hero-feature");
            
            var cardHyperlink = document.createElement("a");
            cardHyperlink.setAttribute("class", "extLink");
            cardHyperlink.setAttribute("target", "_blank");
            cardHyperlink.setAttribute("href", json[i].link);
            
            var thumbNail = document.createElement("div");
            thumbNail.setAttribute("class", "thumbnail thumbnail-jumbotron hero");
            
            
            
            var cardImage = document.createElement("img");
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            cardImage.setAttribute("src", imageArray[imageIndex]);
            
            
            
            var caption = document.createElement("div");
            caption.setAttribute("class", "caption");
           
            
            var feedTitle = document.createElement("h3");
            feedTitle.setAttribute("class", "feedTitle");
            feedTitle.textContent = json[i].title;
            
            
            // appending to outer card container
            var cardContainer = document.querySelector(".cardContainer");
            cardDiv.appendChild(cardHyperlink);
            thumbNail.appendChild(cardImage);
            thumbNail.appendChild(caption);
            cardHyperlink.appendChild(thumbNail);

            caption.appendChild(feedTitle);
            cardContainer.appendChild(cardDiv);
        }     
    }

}


