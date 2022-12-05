const dataExemple = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
  }
]

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))

const gridView = new GridView()

const data = {
  element: 'body',
  data: dataExemple,
  attribute: {
    name: {
      label: 'Имя',
      callback: (item) => {
        return item.toUpperCase()
      },
    },
    username: {
      label: 'Логин'
    },
    email: {
      label: 'Почта',
      callback: (item) => {
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.innerHTML = item
        return a
      }
    },
  }
}

gridView.render(data)