$(function() {
    // enter
      $("#search").on('keypress',function(e){
          if(e.key === 'Enter'){
              e.preventDefault();
              
              $(".cardContainer").empty();
              
              var searchTerm = $("#search").val();
              var url = "search.html?query=" + searchTerm;
              window.location.href = url;

          }
      });


 // click
     $("#search").on("click", function() {
      $("#search").on("click", function() {
        $(".cardContainer").empty();

          var searchTerm = $("#search").val();
          var url = "search.html?query=" + searchTerm;
          window.location.href = url;
                    
      });
    });
  });





  var qsParm = new Array();
  $(function qs () {
      var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i=0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;
              }
          }
      
    
      if (qsParm["query"] != null) {

                    $(".cardContainer").empty();
                    var url = "http://localhost:4000/fsearch?q="+ val; 
                    $.ajax({
                        url: url,
                        type: 'GET',
                        contentType: "application/json; charset=utf-8",
                        async: false,
                        dataType: "json",
          
                        success: function(data, status, jqXHR) {
                            console.log(data);
                           //$("#output").html();
                           let imageArray = ["./images/Search/Node1.png","./images/Search/Node2.png", "./images/Search/Node3.png", "./images/Search/Node4.png", "./images/Search/Node5.png", "./images/Search/Node6.png", "./images/Search/Node7.png", "./images/Search/Node8.png", "./images/Search/Node9.png", "./images/Search/Node10.png", "./images/Search/Design11.png",
                           "./images/Search/Engineering1.png","./images/Search/Engineering2.jpg", "./images/Search/Engineering3.png", "./images/Search/Engineering4.png", "./images/Search/Engineering5.jpg", "./images/Search/Engineering6.jpg", "./images/Search/Engineering7.jpg", "./images/Search/Engineering8.png", "./images/Search/Engineering9.png", "./images/Search/Engineering10.jpg", "./images/Search/Engineering11.png",
                           "./images/Search/Design1.png","./images/Search/Design2.png", "./images/Search/Design3.png", "./images/Search/Design4.png", "./images/Search/Design5.png", "./images/Search/Design6.png", "./images/Search/Design7.png", "./images/Search/Design8.png", "./images/Search/Design9.png", "./images/Search/Design10.png",
                           "./images/Search/Devops1.png","./images/Search/Devops2.png", "./images/Search/Devops3.png", "./images/Search/Devops4.png", "./images/Search/Devops5.png", "./images/Search/Devops6.png", "./images/Search/Devops7.png", "./images/Search/Devops8.png", "./images/Search/Devops9.png", "./images/Search/Devops10.png",
                           "./images/Search/Product1.png","./images/Search/Product2.png", "./images/Search/Product3.png", "./images/Search/Product4.png", "./images/Search/Product5.png", "./images/Search/Product6.png", "./images/Search/Product7.png", "./images/Search/Product8.png", "./images/Search/Product9.png", "./images/Search/Product10.png",
                          ];
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
      }
  });

  

  
  
  