var images = [
    "https://images.unsplash.com/photo-1595980542930-9eea66620834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    "https://images.unsplash.com/photo-1607207685777-0986a1eede0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1608315172253-d6d45356d03a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
    ]
    
    console.log(images.length)
    let previous = document.querySelector(".previous")
    let next = document.querySelector(".next")
    
    var count = 0;
        function slideShow() {
            document.getElementById('image').src = images[count];
            count++;
            if (count == images.length) {
                
                 count = 0; 
                }
        }
        slideShow();
    
        next.addEventListener("click", function(){
            slideShow()
        })
        
        previous.addEventListener("click", function(){
            slideShow()
        })
        