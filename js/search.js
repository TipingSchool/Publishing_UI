$(function() {
    // enter
      $("#search").on('keypress',function(e){
          if(e.key === 'Enter'){
              e.preventDefault();

              var searchTerm = $("#search").val();
              var url = "http://localhost:4000/search?q="+ searchTerm; 
              $.ajax({
              url: url,
              type: 'GET',
              contentType: "application/json; charset=utf-8",
              async: false,
              dataType: "json",
              
              success: function(data, status, jqXHR) {
                console.log(data);
                let imageArray = ["./images/Node/Node1.png","./images/Node/Node2.png", "./images/Node/Node3.png", "./images/Node/Node4.png", "./images/Node/Node5.png", "./images/Node/Node6.png", "./images/Node/Node7.png", "./images/Node/Node8.png", "./images/Node/Node9.png", "./images/Node/Node10.png", "./images/Design/Design11.png"];
                let imageArrayLength = imageArray.length;
                $("#output").html();
                for(var i=0;i<data.length;i++){
                    var cardDiv = document.createElement("div");
                    cardDiv.setAttribute("class", "col-md-4 col-sm-4 hero-feature");
                    
                    var cardHyperlink = document.createElement("a");
                    cardHyperlink.setAttribute("class", "extLink");
                    cardHyperlink.setAttribute("target", "_blank");
                    cardHyperlink.setAttribute("href", data[i].link);
                    
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
                    feedTitle.textContent = data[i].title;
                    
                    var feedDescription = document.createElement("h3");
                    feedDescription.setAttribute("class", "feedDescription");
                    feedDescription.textContent = data[i].description.substring(0,200) + "...";
                    
                    
                    // appending to outer card container
                    var cardContainer = document.querySelector(".cardContainer");
                    cardDiv.appendChild(cardHyperlink);
                    thumbNail.appendChild(cardImage);
                    thumbNail.appendChild(caption);
                    cardHyperlink.appendChild(thumbNail);
        
                    caption.appendChild(feedTitle);
                    caption.appendChild(feedDescription);
                    cardContainer.appendChild(cardDiv);
                }
  
              }
          })
          }
      });


 // click
      $("#search").on("click", function() {
          var searchTerm = $("#search").val();
          var url = "http://localhost:4000/search?q="+ searchTerm; 
          $.ajax({
              url: url,
              type: 'GET',
              contentType: "application/data; charset=utf-8",
              async: false,
              dataType: "json",

              success: function(data, status, jqXHR) {
                  console.log(data);
                 $("#output").html();
                 let imageArray = ["./images/Node/Node1.png","./images/Node/Node2.png", "./images/Node/Node3.png", "./images/Node/Node4.png", "./images/Node/Node5.png", "./images/Node/Node6.png", "./images/Node/Node7.png", "./images/Node/Node8.png", "./images/Node/Node9.png", "./images/Node/Node10.png", "./images/Design/Design11.png"];
                 let imageArrayLength = imageArray.length;
                  for(var i=0;i<data.length;i++){
                    var cardDiv = document.createElement("div");
                    cardDiv.setAttribute("class", "col-md-4 col-sm-4 hero-feature");
                    
                    var cardHyperlink = document.createElement("a");
                    cardHyperlink.setAttribute("class", "extLink");
                    cardHyperlink.setAttribute("target", "_blank");
                    cardHyperlink.setAttribute("href", data[i].link);
                    
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
                    feedTitle.textContent = data[i].title;
                    
                    var feedDescription = document.createElement("h3");
                    feedDescription.setAttribute("class", "feedDescription");
                    feedDescription.textContent = data[i].description.substring(0,200) + "...";
                    
                    
                    // appending to outer card container
                    var cardContainer = document.querySelector(".cardContainer");
                    cardDiv.appendChild(cardHyperlink);
                    thumbNail.appendChild(cardImage);
                    thumbNail.appendChild(caption);
                    cardHyperlink.appendChild(thumbNail);
        
                    caption.appendChild(feedTitle);
                    caption.appendChild(feedDescription);
                    cardContainer.appendChild(cardDiv);
                  }
  
              }
          })
          .done(function() {
              console.log("success");
          })
          .fail(function() {
              console.log("error");
          })
          .always(function() {
              console.log("complete");
          });
          
          
      });
  });





  

  
  
  