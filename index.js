  var tour1 = {
            name: "Norway Tour",
            description: "Welcome to Norway, a land of stunning natural beauty, rich culture, and fascinating history.",
            imgSrc: "https://deih43ym53wif.cloudfront.net/alesund-geirangerfjord-norway-shutterstock_713775481_ceec01fac3.jpeg"
        };

        var tour2 = {
            name: "New York Tour",
            description: "Welcome to New York City, the city that never sleeps. With its iconic skyline, vibrant culture, and diverse neighborhoods.",
            imgSrc: "https://www.tripsavvy.com/thmb/C55SxvFfoqLpb9IFL3rHLtvUn2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-642333830-5bd6f58dc9e77c0058677fba.jpg"
        };

        // Select elements using JavaScript and modify them
        var tour1Card = document.querySelector("#tour1");
        tour1Card.querySelector(".card-title").textContent = tour1.name;
        tour1Card.querySelector(".card-text").textContent = tour1.description;
        tour1Card.querySelector(".card-img-top").src = tour1.imgSrc;

        var tour2Card = document.querySelector("#tour2");
        tour2Card.querySelector(".card-title").textContent = tour2.name;
        tour2Card.querySelector(".card-text").textContent = tour2.description;
        tour2Card.querySelector(".card-img-top").src = tour2.imgSrc;

        // Add event listeners
        tour1Card.addEventListener("click", function() {
            alert("You clicked on " + tour1.name);
        });

        tour2Card.addEventListener("click", function() {
            alert("You clicked on " + tour2.name);
        });

        document.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                alert("You pressed the Enter key");
            }
        });

        // JS animations
        var header = document.querySelector("header");
        header.addEventListener("mouseover", function() {
            header.style.backgroundColor = "red";
        });

        // Play sound
     function playSound() {
  var sound = document.getElementById("button-sound");
  sound.play();
}
    bookButton.addEventListener('click', function() {
        sound.play();
    });
    