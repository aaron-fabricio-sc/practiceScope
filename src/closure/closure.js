const sumatoria = ()=> {
    let almancenaje = 0
    const sumar = (numero)=> {
        almancenaje += numero;
        console.log(almancenaje)
    }
    return sumar
}
 

let num = sumatoria()
 num(5)
 num(5)


 const persona = () =>{
    let nombre = ""
    return{
        getName: () =>{
            return nombre
        },
        setName: (nuevo) =>{
            nombre = nuevo
        }
    }
 }  

   const nuevaPersona = persona();
  console.log(nuevaPersona.getName())
  nuevaPersona.setName('melisa mi amor')
  console.log(nuevaPersona.getName())


  console.log(a)
  var a = "2"
  console.log(a)