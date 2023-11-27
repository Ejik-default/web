var images = document.getElementsByClassName("news-image");

for (var i = 0; i < images.length; i++) {
    (function () {
        var img = images[i];

        function enlargeImg() {
            var src = img.src;

            var container = document.createElement("div");
            container.className = "enlarged-image-container";

            var overlay = document.createElement("div");
            overlay.className = "image-overlay";

            var enlargedImg = document.createElement("img");
            enlargedImg.src = src;
            enlargedImg.className = "enlarged-image";

            container.appendChild(overlay);
            container.appendChild(enlargedImg);

            document.body.appendChild(container);

            overlay.addEventListener("click", function () {
                container.remove();
            });

        }

        img.addEventListener("click", enlargeImg);
    })();
}