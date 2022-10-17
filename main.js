document.querySelector('button').addEventListener('click', getPicture )

function getPicture(){
   let date = document.querySelector('.date').value
fetch(` https://api.nasa.gov/planetary/apod?api_key=Cfilfcf1of4Z3pqGuNDt7sXm23bcbhYsBbA6lhou&date=${date}` )

.then( res => res.json())
.then( data => {
    console.log(data)
   document.querySelector('img').src= data.url
   
})
}