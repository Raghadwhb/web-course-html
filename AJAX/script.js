function searchGiphy() {
    var textValue = document.getElementById("searchInput").value;

    if (textValue === "") {
        alert("Please enter a search word");
        return;
    }

    var apiKey = "KsrV56mBmrFnDpjnyicZfhL1e2syYcGY";

    var url = "https://api.giphy.com/v1/gifs/search?api_key="
            + apiKey
            + "&q=" + encodeURIComponent(textValue)
            + "&limit=8&rating=g";

    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            var gifs = data.data; 

            var output = document.getElementById("results");
            output.innerHTML = "";

            for (var i = 0; i < gifs.length; i++) {
                var gifUrl = gifs[i].images.fixed_height.url;

                output.innerHTML +=
                    "<div class='col-md-3 col-sm-6 mb-4'>" +
                        "<div class='card shadow-sm'>" +
                            "<img src='" + gifUrl + "' class='card-img-top'>" +
                        "</div>" +
                    "</div>";
            }
        } else {
            alert("Error: " + request.status);
        }
    };

    request.send();
}