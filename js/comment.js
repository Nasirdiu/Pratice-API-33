function Comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=> res.json())
    .then(data=> displayComment(data))
}

function displayComment(com){
    const commnet=document.getElementById('Comment');
    for(const comme of com){
        const div=document.createElement('div');
        div.innerHTML=`Id--${comme.id} body--${comme.body} Name:${comme.name}`;
        commnet.appendChild(div);
    }
}