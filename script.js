function test () {
    let btn = document.getElementById('btn');
    let text = document.getElementById('hide')

    if (text.style.display === 'none') {
        text.style.display = 'block'
    } else {
        text.style.display = 'none'
    }
}
