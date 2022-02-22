function typi(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=> res.json())
    .then(data=> displayTypi(data))
}

function displayTypi(display){
    const typicode=document.getElementById('typicode');
    // console.log(display);

    for(const play of display){
        const div=document.createElement('div');
        div.innerHTML=`id:${play.id} Title:${play.title}`;
        typicode.appendChild(div);
    }
}