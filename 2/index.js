var ratingOptions = document.querySelectorAll("li");

for (var i = 0; i < ratingOptions.length; i++) {
    ratingOptions[i].addEventListener("click", function () {
        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
            return;
        }

        ratingOptions.forEach(function (ratingOption) {
            ratingOption.classList.remove("selected");
        });

        // selected-rating

        document.querySelector(
            ".selected-rating"
        ).innerHTML = `You selected ${this.innerHTML} out of 5`;

        this.classList.add("selected");
    });
}

document.querySelector("button").addEventListener("click", function () {
    var ratingOptions = document.querySelectorAll("li");

    var c = 0;

    for (var i = 0; i < ratingOptions.length; i++) {
        if (ratingOptions[i].classList.contains("selected")) {
            c++;
        }
    }

    if (c === 0) {
        alert("Please select a rating");
        return;
    }

    document.querySelector(".rate").classList.add("hide");
    document.querySelector(".thanks").classList.remove("hide");

});
