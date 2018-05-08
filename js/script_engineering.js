let req = new XMLHttpRequest();
req.open("GET", "http://localhost:4000/feeds/published/design", true);
req.send();
req.onload = function(){
   let json = JSON.parse(req.response);
    console.log(json);
    let len = json.length;
    let imageArray = ["./images/Engineering/Engineering1.png","./images/Engineering/Engineering2.jpg", "./images/Engineering/Engineering3.png", "./images/Engineering/Engineering4.png", "./images/Engineering/Engineering5.jpg", "./images/Engineering/Engineering6.jpg", "./images/Engineering/Engineering7.jpg", "./images/Engineering/Engineering8.png", "./images/Engineering/Engineering9.png", "./images/Engineering/Engineering10.jpg", "./images/Engineering/Engineering11.png"];
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
            cardImage.setAttribute("class", "imageRandom");
            
            
            var caption = document.createElement("div");
            caption.setAttribute("class", "caption");
           
            
            var feedTitle = document.createElement("h3");
            feedTitle.setAttribute("class", "feedTitle");
            feedTitle.textContent = json[i].title;

            // var feedDescription = document.createElement("h3");
            // feedDescription.setAttribute("class", "feedDescription");
            // feedDescription.textContent = json[i].description.substring(0,200) + "...";
            
            
            // appending to outer card container
            var cardContainer = document.querySelector(".cardContainer");
            cardDiv.appendChild(cardHyperlink);
            thumbNail.appendChild(cardImage);
            thumbNail.appendChild(caption);
            cardHyperlink.appendChild(thumbNail);

            caption.appendChild(feedTitle);
            // caption.appendChild(feedDescription);
            cardContainer.appendChild(cardDiv);
        }     
    }
}

$(function() {
    // enter
      $("#search").on('keypress',function(e){
          if(e.key === 'Enter'){
            e.preventDefault();
            // window.location.replace("search.html");  
            var searchTerm = $("#search").val();  
            var url = "search.html?query=" + searchTerm;
            window.location.href = url;                 
          }
      });
  // click
  $("#search").on("click", function() {
      $("#search").on("click", function() {
        //window.location.replace("search.html");
        var searchTerm = $("#search").val();
        var url = "search.html?query=" + searchTerm;
        window.location.href = url;  
      });
    });
  });