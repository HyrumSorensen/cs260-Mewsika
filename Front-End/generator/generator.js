const input = document.getElementById('paragraph');
const footer = document.querySelector('footer');

function handleSubmit(e) {

    // let body = {
    //     name: input.value
    // }
    // console.log(body)

    // axios.post('/texts', body)
    // .then(res => {
    //     input.value = '';
    //     console.log(res.data);
    // })
     (async function () {
        var resp = await deepai.callStandardApi("text-generator", {
                text: `${input.value}`,
        });
        // console.log(resp.output)
        createNewSong(resp.output)

    })()

    input.value = ''
}

function createNewSong(string) {
    const newSong = document.createElement('p')
    newSong.textContent = string;
    newSong.setAttribute('class', 'ptag')
    document.querySelector("footer").appendChild(newSong);
}

document.querySelector('#a-tag').addEventListener('click', handleSubmit)

