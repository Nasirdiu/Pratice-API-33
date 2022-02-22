
function album(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=> res.json())
    .then(data => displayAlbum(data))
};

function displayAlbum(show){
    const albums =document.getElementById('albums');
    // console.log(show);
    for(const shows of show){
        const div =document.createElement('p');
        div.innerText=`${shows.id} ${shows.title}`;
        albums.appendChild(div);

    }

}