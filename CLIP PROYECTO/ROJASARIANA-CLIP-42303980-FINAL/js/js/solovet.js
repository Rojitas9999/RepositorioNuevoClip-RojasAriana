function validform() {

    var a = document.forms["my-form"]["full-name"].value;

    if (a==null || a=="")
    {
        alert("Coloque de nuevo su codigo");
        return false;
    }
}


function validarRegistrar()
{

  alert('se creo correctamente')
  
}

