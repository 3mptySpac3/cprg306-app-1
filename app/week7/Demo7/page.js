
async function fetchRandomDog() {
  //  https://dog.ceo/api/breeds/image/random

  const response = fetch ('https://dog.ceo/api/breeds/image/random');
}


export default function Page(){
  return (
    <div>
    <h1> Dog</h1>
    <div>
    Image here
    </div>
    </div>
  );
}



