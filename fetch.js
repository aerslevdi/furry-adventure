window.onload = function(){

    fetchCall('https://jsonplaceholder.typicode.com/users', getUsers);
    searchBar();
}   
    
    
    

    

    function fetchCall(url, fn){
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(finalAnswer){
                fn(finalAnswer);
            })
            .catch(function(error){
                console.error(error);
            })
    }

    function getUsers(getObj) {
        let arrayDatos = [];
        let userObj;
        let userList = document.querySelector('[name =start]');
        let user = getObj;        
        for (let i = 0; i < getObj.length; i++) {
            userObj = user[i];
            arrayDatos.push(user[i]);
            let row = userList.insertRow();    
            let idCell = document.createElement('td');      
            let nameCell = document.createElement('td');      
            let usernameCell = document.createElement('td');      
            let emailCell = document.createElement('td');      
            let cityCell = document.createElement('td');      
            let phoneCell = document.createElement('td');      
            let websiteCell = document.createElement('td');      
            let companyCell = document.createElement('td');      

            idCell.textContent = userObj.id;
            nameCell.textContent = userObj.name;
            usernameCell.textContent = userObj.username;
            emailCell.textContent = userObj.email;
            cityCell.textContent = userObj.address.city;
            phoneCell.textContent = userObj.phone;
            websiteCell.textContent = userObj.website;
            companyCell.textContent = userObj.company.name;
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(usernameCell);
            row.appendChild(emailCell);
            row.appendChild(cityCell);
            row.appendChild(phoneCell);
            row.appendChild(websiteCell);
            row.appendChild(companyCell);
        
        }

        function searchBar() {
            let inputBar = document.getElementById("busquedaInput");
            let arrayDatos = [];
            let text = inputBar.textContent;
            let textV = text.toUpperCase();
            for (let i = 0; i < arrayDatos.length; i++) {
                if (textV == emailCell.textContent || textV == nameCell.textContent) {
                    return search.style.display = "";
                }
            }
        }  
    } 




