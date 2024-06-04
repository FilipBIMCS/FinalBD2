const form = document.getElementById('formProductos')

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    const formdata = new FormData(form)
    var codCatProds = formdata.get('codCatProd')

    fetch(`/getCatbyId?${codCatProds}`).then(res=>{
        if(res.status ==200){
            //insercion de datos
        }else{
            Asignarvalor();
            const close = document.getElementById('close')            
            close.addEventListener('click',)
        }
    })

})


function cargaProductos(){
    const tabla = document.getElementById('productos')

    fetch('/getProductos').then(res =>{
        if(res.status==200){
            res.json().then(data=>{
                
                data.forEach(element => {
                    const tr = document.createElement('tr')

                    const id = document.createElement('td')
                    id.innerText = element.idProducto

                    const nombre =document.createElement('td')
                    nombre.innerText = element.Descripcion

                    const apellidos = document.createElement('td')
                    apellidos.innerText = element.CantDisponible

                    const direccion = document.createElement('td')
                    direccion.innerText = element.Costo
                    const FechaNacimiento=document.createElement('td')
                    FechaNacimiento.innerText = element.PrecioVenta
                    const email = document.createElement('td')
                    email.innerText = element.Cod_Categoria


                    tr.appendChild(id)
                    tr.appendChild(nombre)
                    tr.appendChild(apellidos)
                    tr.appendChild(direccion)
                    tr.appendChild(FechaNacimiento)
                    tr.appendChild(email)


                    tabla.getElementsByTagName('tbody')[0].appendChild(tr)
                });
            })
        }
    })
}

function Asignarvalor(){

    const boton = document.getElementById('boton');

    boton.click()
    var saveButton = document.getElementById('saveChanges');
    saveButton.addEventListener('click', function() {
        var input = document.getElementById('prodsDescrp');
        var inputValue = input.value; // Obtiene el valor del input
        console.log("Valor del input: " + inputValue);
    })
}