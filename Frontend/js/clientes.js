function cargarDatos(){
     // Obtiene el elemento de la tabla HTML con el id 'clientes'
    const tabla = document.getElementById('clientes')
     // Envía una solicitud GET al endpoint '/getClientesm'
    fetch('/getClientesm').then(res =>{
        if(res.status==200){
            res.json().then(data=>{
                
                //Limpiar tabla
                tabla.getElementsByTagName('tbody')[0].innerHTML = ''
                 // Itera sobre los datos recibidos
                data.forEach(element => {
                    // Crea una nueva fila (<tr>) para cada cliente
                    const tr = document.createElement('tr')
                    // Crea celdas (<td>) para cada atributo del cliente y les asigna los valores correspondientes
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

                    // Agrega las celdas (<td>) a la fila (<tr>)
                    tr.appendChild(id)
                    tr.appendChild(nombre)
                    tr.appendChild(apellidos)
                    tr.appendChild(direccion)
                    tr.appendChild(FechaNacimiento)
                    tr.appendChild(email)
                    tr.appendChild(tel)
                    tr.appendChild(cel)
                    // Agrega la fila (<tr>) al tbody de la tabla
                    tabla.getElementsByTagName('tbody')[0].appendChild(tr)
                });
            })
        }
    })
}

function agregarCliente(){
    // Obtiene el formulario HTML con el id 'formCliente'
    const formCliente = document.getElementById('formCliente')
    // Crea un objeto FormData a partir del formulario
    const Formdata = new FormData(formCliente)
    // Crea un nuevo objeto FormData para los datos a enviar
    const data = new FormData()
    // Itera sobre los datos del formulario y los agrega al objeto 'data'
    Formdata.forEach((value,key)=>{
        data[key] = value
    })


    console.log(data)
    // Envía los datos al servidor usando fetch
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
    // Obtiene el ID del cliente a borrar del input con el id 'borrarCliente'
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

function ActualizarCliente(){
    // Obtiene el formulario HTML con el id 'actualizarClientes'
    const formCliente = document.getElementById('actualizarClientes')
    const Formdata = new FormData(formCliente)
    const data = new FormData()

    // Itera sobre los datos del formulario y los agrega al objeto 'data'

    Formdata.forEach((value,key)=>{
        data[key] = value
    })

    // Envía los datos al servidor usando fetch

    fetch(`/updateClient`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
        if(res.status==200){
            alert('Cliente actualizado correctamente')
        }
    })
}