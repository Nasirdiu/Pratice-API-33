function Photos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=> res.json())
    .then(data=> displayPhoto(data))
}

function displayPhoto(photos){
    const photoAll=document.getElementById('photo');
    // console.log(photos);
    for(const photo of photos){
        const div =document.createElement('div');
        div.innerHTML=`Id:${photo.id} <img src=${photo.url}>  <img src =${photo.thumbnailUrl}>`;
        photoAll.appendChild(div);

    }
}

const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} };


