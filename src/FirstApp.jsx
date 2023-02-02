
// // export const FirstApp = () => {

// //     const newMessge = {
// //         message: "hola",
// //         tittle: "Shue"
// //     };

// //   return (
// // // hay que poner esto asi si quiero retornar un grupo de elementos cmo esto
// //   <>
// //   {/* para imprimir cosas de javascript uso {} */}
// //   {/* con JSON.stringify mandamos el objeto como un json */}
// // <h1>{ JSON.stringify(newMessge)  }</h1>
// //     <p>Soy un estudiante de react</p> 
// //   </>
// //   )
// // }


// const getResult = () =>{
//     return 4+4;
// }

// export const FirstApp = () =>{

//     return(
//         // hay que poner esto asi si quiero retornar un grupo de elementos cmo esto
//   <>
//   {/* para imprimir cosas de javascript uso {} */}
//   {/* con JSON.stringify mandamos el objeto como un json */}
// <h1>{ getResult()  }</h1>
//     <p>Soy un estudiante de react</p> 
//   </>
//     )
// }

// esto me sirve para deifinirle el tipo a las properitis
import ProTypes from "prop-types";


export const FirstApp = ( {title, subTitle} ) => {


  return (
    <>
    <h1>{title}</h1>
    <p>{subTitle} </p>
    </>
  )
  
}

FirstApp.propTypes = {
title: ProTypes.string.isRequired, // aca le digo que el campo title tiene q ser string y le digo qes requerido
subTitle: ProTypes.number,
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Shue Larios"
}