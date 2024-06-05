function cargarDatos(){
    const tabla = document.getElementById('clientes')

    fetch('/getClientesm').then(res =>{
        if(res.status==200){
            res.json().then(data=>{
                
                data.forEach(element => {
                    const tr = document.createElement('tr')

                    const id = document.createElement('td')
                    id.innerText = element.idCliente

                    const nombre =document.createElement('td')
                    nombre.innerText = element.Nombre

                    const apellidos = document.createElement('td')
                    apellidos.innerText = element.Apellido

                    const direccion = document.createElement('td')
                    direccion.innerText = element.Direccion
                    const FechaNacimiento=document.createElement('td')
                    FechaNacimiento.innerText = element.FechaNacimiento
                    const email = document.createElement('td')
                    email.innerText = element.email
                    const tel = document.createElement('td')
                    tel.innerText = element.Telefono
                    const cel = document.createElement('td')
                    cel.innerText = element.Celular

                    tr.appendChild(id)
                    tr.appendChild(nombre)
                    tr.appendChild(apellidos)
                    tr.appendChild(direccion)
                    tr.appendChild(FechaNacimiento)
                    tr.appendChild(email)
                    tr.appendChild(tel)
                    tr.appendChild(cel)

                    tabla.getElementsByTagName('tbody')[0].appendChild(tr)
                });
            })
        }
    })
}

function agregarCliente(){
    const formCliente = document.getElementById('formCliente')
    const Formdata = new FormData(formCliente)
    const data = new FormData()

    Formdata.forEach((value,key)=>{
        data[key] = value
    })


    console.log(data)
    fetch('/insertarm',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
        if(res.status==200){
            alert('Cliente agregado correctamente')
        }
    })
}

function borrarCliente(){
    const clienteId = document.getElementById('borrarCliente').value
    fetch(`/borrarCliente`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
        if(res.status==200){
            alert('Cliente eliminado correctamente')
        }
    })
}