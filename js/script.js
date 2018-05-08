
document.addEventListener("DOMContentLoaded", function(){
    var feedTitle = document.querySelectorAll(".feedTitle");
    var feedDescription = document.querySelectorAll(".feedDescription");
    var extLink = document.querySelectorAll(".extLink");
    var imageRandom = document.querySelectorAll(".imageRandom");
    // for Engineering section

    let req1 = new XMLHttpRequest();
    req1.open("GET", "http://localhost:4000/feeds/engineering?state=pub", true);
    req1.send();
    req1.onload = function(){
        let imageArray = ["./images/Engineering/Engineering1.png","./images/Engineering/Engineering2.jpg", "./images/Engineering/Engineering3.png", "./images/Engineering/Engineering4.png", "./images/Engineering/Engineering5.jpg", "./images/Engineering/Engineering6.jpg", "./images/Engineering/Engineering7.jpg", "./images/Engineering/Engineering8.png", "./images/Engineering/Engineering9.png", "./images/Engineering/Engineering10.jpg", "./images/Engineering/Engineering11.png"];
        let imageArrayLength = imageArray.length;
        var json = JSON.parse(req1.response);
        console.log(json);
        for(var i = 0; i < 9; i++){
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            feedTitle[i].textContent = json[i].title;
            // feedDescription[i].textContent = json[i].description.substring(0,200) + "...";
            extLink[i].setAttribute("href", json[i].link);
            imageRandom[i].setAttribute("src", imageArray[imageIndex]);
        }
    }
   




    // for Design section
    let req2 = new XMLHttpRequest();
    req2.open("GET", "http://localhost:4000/feeds/design?state=pub", true);
    req2.send();
    req2.onload = function(){
        let imageArray = ["./images/Design/Design1.png","./images/Design/Design2.png", "./images/Design/Design3.png", "./images/Design/Design4.png", "./images/Design/Design5.png", "./images/Design/Design6.png", "./images/Design/Design7.png", "./images/Design/Design8.png", "./images/Design/Design9.png", "./images/Design/Design10.png"];
        let imageArrayLength = imageArray.length;
        var json = JSON.parse(req2.response);
        console.log(json);
        for(var i = 9; i < 18; i++){
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            feedTitle[i].textContent = json[i - 9].title;
            // feedDescription[i].textContent = json[i - 3].description.substring(0,200) + "...";
            extLink[i].setAttribute("href", json[i - 9].link);
            imageRandom[i].setAttribute("src", imageArray[imageIndex]);
        }
    }     

    // for Nodejs section

    let req3 = new XMLHttpRequest();
    req3.open("GET", "http://localhost:4000/feeds/react?state=pub", true);
    req3.send();
    req3.onload = function(){
        let imageArray = ["./images/Node/Node1.png","./images/Node/Node2.png", "./images/Node/Node3.png", "./images/Node/Node4.png", "./images/Node/Node5.png", "./images/Node/Node6.png", "./images/Node/Node7.png", "./images/Node/Node8.png", "./images/Node/Node9.png", "./images/Node/Node10.png"];
        let imageArrayLength = imageArray.length;
        var json = JSON.parse(req3.response);
        console.log(json);
        for(var i = 18; i < 27; i++){
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            feedTitle[i].textContent = json[i - 18].title;
            // feedDescription[i].textContent = json[i - 6].description.substring(0,200) + "...";
            extLink[i].setAttribute("href", json[i - 18].link);
            imageRandom[i].setAttribute("src", imageArray[imageIndex]);
        }
    }
    
    // for Devops section

    let req4 = new XMLHttpRequest();
    req4.open("GET", "http://localhost:4000/feeds/devops?state=pub", true);
    req4.send();
    req4.onload = function(){
        let imageArray = ["./images/Devops/Devops1.png","./images/Devops/Devops2.png", "./images/Devops/Devops3.png", "./images/Devops/Devops4.png", "./images/Devops/Devops5.png", "./images/Devops/Devops6.png", "./images/Devops/Devops7.png", "./images/Devops/Devops8.png", "./images/Devops/Devops9.png", "./images/Devops/Devops10.png"];
        let imageArrayLength = imageArray.length;
        var json = JSON.parse(req4.response);
        console.log(json);
        for(var i = 27; i < 36; i++){
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            feedTitle[i].textContent = json[i - 27].title;
            // feedDescription[i].textContent = json[i - 9].description.substring(0,200) + "...";
            extLink[i].setAttribute("href", json[i - 27].link);
            imageRandom[i].setAttribute("src", imageArray[imageIndex]);
        }
    }
    
    // for Product Management
    
    let req5 = new XMLHttpRequest();
    req5.open("GET", "http://localhost:4000/feeds/product?state=pub", true);
    req5.send();
    req5.onload = function(){
        let imageArray = ["./images/Devops/Devops1.png","./images/Devops/Devops2.png", "./images/Devops/Devops3.png", "./images/Devops/Devops4.png", "./images/Devops/Devops5.png", "./images/Devops/Devops6.png", "./images/Devops/Devops7.png", "./images/Devops/Devops8.png", "./images/Devops/Devops9.png", "./images/Devops/Devops10.png"];
        let imageArrayLength = imageArray.length;
        var json = JSON.parse(req5.response);
        console.log(json);
        for(var i = 36; i < 45; i++){
            let imageIndex = Math.round(Math.random() * (imageArrayLength - 1));
            feedTitle[i].textContent = json[i - 36].title.substring(0,100);
            // feedDescription[i].textContent = json[i - 12].description.substring(0,200) + "...";
            extLink[i].setAttribute("href", json[i - 36].link);
            imageRandom[i].setAttribute("src", imageArray[imageIndex]);
        }
    }
    
    
    let yearElement = document.querySelector("#year");
    yearElement.innerHTML = (new Date()).getFullYear();
});

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



       
