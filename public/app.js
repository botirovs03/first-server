const disp = document.querySelector('#out');

function isLatinString(s) {
    var i, charCode;
    for (i = s.length; i--;) {
      charCode = s.charCodeAt(i)
      if (charCode < 65 || charCode > 122)
        return charCode
    }
    return true
  }

  
function getdata(){
    let x = document.getElementById("inputfld").value;
    // alert(x);
    fetch('http://localhost:3000/api/dictionary?search='+String(x))
    .then(response => response.json())
    .then(data => {
        if (data.length!=0) {
            document.getElementById("eng").innerHTML = data[0].eng;
            document.getElementById("jap").innerHTML = data[0].jap;
            document.getElementById("def").style.color='black';
            document.getElementById("def").innerHTML = data[0].def;
        } else {
            document.getElementById("eng").innerHTML = '';
            document.getElementById("jap").innerHTML = '';
            document.getElementById("def").style.color='Red';
            document.getElementById("def").innerHTML = 'Nothing found! Search for other words.';
        }
        
        // const title = '<h1>' + data[0].Eng + '</h1>'
        // disp.insertAdjacentHTML("beforeend", title)
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


document.querySelector('button')
            .addEventListener('click', (e) => {
                e.preventDefault();
                const username = document
                    .querySelector('#user').value;
 
                const password = document
                    .querySelector('#pass').value;
                     
                fetch('http://localhost:3000/po', {
                    method: 'POST',
                    headers: {
                        Authorization: 'Bearer abcdxyz',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => console.log(data));
            });