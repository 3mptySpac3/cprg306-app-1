
// random_image.js
function fetchRandomImage() {
  return fetch("https://api.nekosapi.com/v3/images/random", {
      method: "GET",
  })
  .then(res => res.json())
  .then(data => {
      console.log(data);
      return data;
  })
  .catch(error => {
      console.error('Error fetching random image:', error);
      return null;
  });
}

export default fetchRandomImage;
