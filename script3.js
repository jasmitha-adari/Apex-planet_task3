const images = [
    "https://4kwallpapers.com/images/walls/thumbs_3t/8172.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/17864.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/12905.jpeg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/103.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/22059.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_3t/8515.jpg"
  ];
  
  let current = 0;
  
  function showImage(index) {
    const img = document.getElementById("carouselImage");
    img.src = images[index];
  }
  
  function nextSlide() {
    current = (current + 1) % images.length;
    showImage(current);
  }
  
  function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
  
  showImage(current);
  
  function getJoke() {
    const jokeEl = document.getElementById("jokeText");
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then(res => res.json())
      .then(data => {
        jokeEl.textContent = data.joke;
      })
      .catch(() => {
        jokeEl.textContent = "Oops! Couldn't fetch a joke.";
      });
  }