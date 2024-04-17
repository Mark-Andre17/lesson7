let getUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }else{
            return response.json();
        }
    })
    .then((data) => {
        let button = document.querySelector('.button');
        button.addEventListener('click', () => {
            let container = document.querySelector('.container');
            for(let element of data) {
                let userDiv = document.createElement('div');
                let userDivBtn = document.createElement('div');
                let userName = document.createElement('p');
                let  userEmail = document.createElement('a');
                let userCity = document.createElement('p');
                let closeButton = document.createElement('button');
                userDiv.classList = 'user-div';
                userDivBtn.classList = 'user-div-btn';
                closeButton.classList = 'close';
                userName.classList = 'user-name';
                userEmail.classList = 'user-email';
                userCity.classList = 'user-city';
                closeButton.innerHTML = '&times;';
                userName.innerHTML = `Имя: ${element.name}`;
                userEmail.innerHTML = `Почта: ${element.email}`;
                userCity.innerHTML = `Город: ${element.address.city}`;
                userEmail.href = `mailto:${element.email}`
                container.append(userDiv);
                userDiv.append(userDivBtn,userEmail,userCity);
                userDivBtn.append(userName, closeButton);
            }
            let htmlBody = document.querySelector('body');
            htmlBody.addEventListener('click', function(event) {
                if(event.target.className != 'close') return
                let item = event.target.closest('.user-div')
                item.remove()
            })
        })
    })
    .catch(error => console.log(error))
