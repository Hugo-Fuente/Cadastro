function visualize(thepage){
    document.body.setAttribute('page',thepage)
}

var registerList = {
    users:[
        {RA:172386,name:'hugo gomes de la fuente', gender:'masculino',age:21,add:'Rua dos Calangos',phone:'99 90000-0000',email:'h172386@dac.unicamp.br'},
        {RA:000000,name:'carlota joaquina', gender:'feminino',age:246,add:'Palácio Real de Queluz',phone:'99 90000-0001',email:'carlotinha@hotmail.com'}
    ]
}

function render(){
    const tbody = document.getElementById('bodyRegisterList')
    if(tbody){
        tbody.innerHTML = registerList.users
            .sort( (a,b) => {
                return a.name < b.name ? -1 : 1
            })
            .map(user => {    
                return `<tr>
                        <td>${user.RA}</td>
                        <td>${user.name}</td>
                        <td>${user.gender}</td>
                        <td>${user.age}</td>
                        <td>${user.address}</td> 
                        <td>${user.phone}</td> 
                        <td>${user.email}</td> 
                    </tr>`
            }).join('') /* Para não retornar como um array */
    }
}

function insertUser(RA,name,gender,age,address,phone,email){
    registerList.users.push({
        RA,name,gender,age,address,phone,email
    })
    render()
    visualize('list')
}

function editUser(RA,name,gender,age,address,phone,email){

}

function deleteUser(RA){

}

function submit(e){
    e.preventDefault()
    alert('salvo com sucesso')
    const data = {
        RA: document.getElementById('RA').value,
        name: document.getElementById('name').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    }
    insertUser(data.RA,data.name,data.gender,data.age,data.address,data.phone,data.email)
    
    console.log(data)
}

window.addEventListener('load',() => {
    render()
    document.getElementById('registerRegistry').addEventListener('submit',submit)
})


