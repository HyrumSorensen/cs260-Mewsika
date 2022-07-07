const form = document.querySelector('#song-form');
const songInput = document.querySelector('#name-input');
const artistInput = document.querySelector('#artist-input');
const message = document.querySelector('#message');


function revealMessage(){
    message.classList.remove("hide");
    setTimeout(addHide, 2000);
}
function addHide(){
    message.classList.add("hide");
}

function handleSubmit(e) {
    e.preventDefault()
    document.getElementById('display-button').disabled = false;

    while (document.querySelector('footer').firstChild) {
        document.querySelector('footer').removeChild(document.querySelector('footer').firstChild);
    }
    if (songInput.value < 1 || artistInput.value < 1) {
        alert ('You must enter a song and artist name')
        return
    }

    let body = {
        name: songInput.value,
        artistName: artistInput.value,
        favorite: false
    }
    axios.post('/songs', body)
    .then(() => {
        message.textContent = `${songInput.value} was succsessfully added to the database!`
        revealMessage();
        songInput.value = ''
        artistInput.value = ''
    })
}
function getSongs() {
    axios.get('/songs')
    .then(res => {
        document.getElementById('display-button').disabled = true;
        while (document.querySelector('footer').firstChild) {
            document.querySelector('footer').removeChild(document.querySelector('footer').firstChild);
        }
        res.data.forEach(song => {
            createSongTag(song['song_id'], song.name, song.artist_name)
        })
    
        window.scrollBy(0, 300);
    })
}

function deleteCard(event) {
    const deleteId= event.target.id
    console.log('in delete Card')
    axios.delete(`/songs/${deleteId}`)
    .then(() => getSongs())
    .catch(err => console.log(err))
}


function createSongTag(id, name, artistName) {
    console.log('this is the id', id)
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('songs-content-div');
    const songDiv = document.createElement('div');
    songDiv.classList.add('gotSongs');
    const ptag = document.createElement('p');
    ptag.setAttribute('value', id);
    ptag.textContent = (`Song: ${name}`);
    const ptagTwo = document.createElement('p');
    ptagTwo.textContent = (`Artist: ${artistName}`)
    songDiv.appendChild(ptag);
    songDiv.appendChild(ptagTwo);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Song';
    deleteButton.classList.add('delete-buttons');
    deleteButton.setAttribute('id', id);
    contentDiv.appendChild(songDiv);
    contentDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteCard)
    document.querySelector('footer').appendChild(contentDiv);
}

document.querySelector('#a-tag').addEventListener('click', handleSubmit)
document.getElementById('display-button').addEventListener('click', getSongs)