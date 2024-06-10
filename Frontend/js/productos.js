const form = document.getElementById('formProductos')

//maneja el envío de un formulario en una página
//
form.addEventListener('submit',(e) =>
{
    e.preventDefault()

    //obtiene los datos del formulario
    const formdata = new FormData(form)

    //un objeto llamado Categoria utilizando los valores obtenidos del formulario. 
    //Estos valores corresponden a los campos codCatProd y prodsDescrp
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
                console.log(data)// // Muestra los datos recibidos del servidor en la consola
            })
        }
    })
})

//cargar y mostrar datos de productos
function cargaProductos(){
   
    //busca y obtiene el elemento HTML que tiene el id igual a 'productos'.
    // este elemento es una tabla (<table>) en la cual queremos mostrar los productos.
    const tabla = document.getElementById('productos')
    fetch('/getProductos').then(res =>{
        if(res.status==200){
            res.json().then(data=>{

                // Limpia el contenido actual de tbody
                tabla.getElementsByTagName('tbody')[0].innerHTML = '' 
              
                data.forEach(element => {

                    // Para cada elemento en los datos recibidos, crea una nueva fila (<tr>)
                    const tr = document.createElement('tr')

                     
                    const id = document.createElement('td')
                    id.innerText = element.idProducto 


                    //Crear celda para el nombre
                    const nombre =document.createElement('td')
                    nombre.innerText = element.Descripcion

                    //Crear celda para el apellido
                    const apellidos = document.createElement('td')
                    apellidos.innerText = element.CantDisponible

                    const direccion = document.createElement('td')
                    direccion.innerText = element.Costo

                    const FechaNacimiento=document.createElement('td')
                    FechaNacimiento.innerText = element.PrecioVenta

                    const email = document.createElement('td')
                    email.innerText = element.Cod_Categoria

                     // Agrega las celdas (<td>) a la fila (<tr>)
                    tr.appendChild(id)
                    tr.appendChild(nombre)
                    tr.appendChild(apellidos)
                    tr.appendChild(direccion)
                    tr.appendChild(FechaNacimiento)
                    tr.appendChild(email)

                     // Agrega la fila (<tr>) a la tabla
                    tabla.getElementsByTagName('tbody')[0].appendChild(tr)
                });
            })
        }
    })
}

function Asignarvalor(){

    const boton = document.getElementById('boton');// Busca el elemento DOM con id 'boton'
    boton.click()// Simula un click en el botón identificado por 'boton'

    //Busca el elemento del DOM con id 'saveChanges'
    var saveButton = document.getElementById('saveChanges');

    
    saveButton.addEventListener('click', function() 
    {
        var input = document.getElementById('prodsDescrp');
        var inputValue = input.value; // Obtiene el valor del input
        console.log("Valor del input: " + inputValue);
    })
}


