const form = document.getElementById('formProductos')

form.addEventListener('submit',(e) =>{
    e.preventDefault()

    const formdata = new FormData(form)

    let Categoria = { 
        codCategoria:formdata.get('codCatProd'),
        Descripcion:formdata.get('prodsDescrp')
    }
    const data = new FormData()

    formdata.forEach((value,key)=>{
        if(key != 'codCatProd' || key != 'prodsDescrp'){
            data[key] = value
        }
    })
    data.Categoria = Categoria
    fetch('/addProductm',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>{
        if(res.status==200){
            res.json().then(data=>{
                console.log(data)
            })
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