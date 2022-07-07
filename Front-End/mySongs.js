const form = document.querySelector('#song-form');
const songInput = document.querySelector('#name-input');
const artistInput = document.querySelector('#artist-input')

function handleSubmit(e) {
    console.log('entered handleSubmit')
    form.submit();
    e.preventDefault()

    if (songInput.value < 1 || artistInput.value < 1) {
        alert ('You must enter a song and artist name')
        return
    }

    let body = {
        name: songInput.value,
        artistName: artistInput.value,
        favorite: false
    }

    axios.post('https://mewsika.herokuapp.com/songs', body)
    .then(() => {
        songInput.value = ''
        artistInput.value = ''
    })
}

document.querySelector('#a-tag').addEventListener('click', handleSubmit)