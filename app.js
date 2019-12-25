document.getElementById('btn1').addEventListener('click', getText)

document.getElementById('btn2').addEventListener('click', getJson)

document.getElementById('btn3').addEventListener('click', getAPI)

function getText() {
  fetch(`test.txt`)
    .then(res => res.text())
    .then(data => {
      console.log(data)
      document.getElementById('output').innerHTML = `<p >${data}</p>`
    })
    .catch(err => console.log(err))
}

function getJson() {
  fetch(`post.json`)
    .then(res => res.json())
    .then(data => {
      let output = ''
      data.forEach(post => {
        output += `<li>${post.title}</li>`

      });
      let x = document.getElementById('output').innerHTML = `<ul >${output}</ul>`
    })
    .catch(err => console.log(err))
}

function getAPI() {
  fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(data => {
      let output = ''
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      let x = document.getElementById('output').innerHTML = `<ul style="list-style-type:circle;">${output}</ul>`
    })
    .catch(err => console.log(err))
}


