// write your code here 
fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens => {
        const ramenList = document.querySelector("#ramen-menu")
        ramens.forEach(ramen => {
            const img = document.createElement("img");
            img.setAttribute('src', ramen.image);
            ramenList.append(img);
            img.addEventListener("click", () => {
                const info = document.getElementById("#ramen-detail")
                const infoImage = document.querySelector("#ramen-detail .detail-image");
                infoImage.setAttribute('src', ramen.image);
                const infoRamenName = ramen.name;
                document.querySelector("#ramen-detail .name").textContent = infoRamenName;
                const infoRestaurantName = ramen.restaurant;
                document.querySelector("#ramen-detail .restaurant").textContent = infoRestaurantName;
                const infoRating = ramen.rating;
                document.getElementById("rating-display").textContent = infoRating;
                const infoComment = ramen.comment;
                document.getElementById("comment-display").textContent = infoComment;
            })
        })
    }

    );


    // showButton.addEventListener("click", () => {
    //     myDiv.style.display = "block";
    //   });

    // function displayInfo (ramenInfo){
    //     const info = document.getElementById("#ramen-detail")
    //     const ramenName = ramen.name;
    //     document.getElementsByClassName("name").textContent = ramenName;
    //     const restaurantName = ramen.restaurant;
    //     document.getElementsByClassName("restaurant").textContent = restaurantName;