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
document.querySelector('#new-ramen').addEventListener("submit", event => {
    event.preventDefault();
    fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application.json"
    },
    body: JSON.stringify({
        name: document.querySelector('#new-name').value,
        restaurant: document.querySelector('#new-restaurant').value,
        image: document.querySelector('#new-image').value,
        rating: document.querySelector('#new-rating').value,
        comment: document.querySelector('#new-comment').value
    })
    })
    .then(response => response.json())
    .then(newRamen => {
        // const ramenList = document.querySelector("#ramen-menu");
        // ramenList.append(newRamen);
        const img = document.createElement("img");
        img.setAttribute('src', newRamen.image);
        document.querySelector("#ramen-menu").append(img);
        img.addEventListener("click", () => {
            const info = document.getElementById("ramen-detail");
            const infoImage = document.querySelector("#ramen-detail .detail-image");
            infoImage.setAttribute('src', newRamen.image);
            document.querySelector("#ramen-detail .name").textContent = newRamen.name;
            document.querySelector("#ramen-detail .restaurant").textContent = newRamen.restaurant;
            document.getElementById("rating-display").textContent = newRamen.rating;
            document.getElementById("comment-display").textContent = newRamen.comment;
    })
    })
})