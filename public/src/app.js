const disp = document.querySelector('#out');
function getdata(){
    fetch('http://localhost:3000/outword')
    .then(response => response.json())
    .then(data => {
        const title = '<h1>' + data[0].Eng + '</h1>'
        disp.insertAdjacentHTML("beforeend", title)
    })
}


// fetch('http://localhost:3000/po', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         user: {
//             name: "John",
//             email: "john@example.com"
//         }
//     })
// });