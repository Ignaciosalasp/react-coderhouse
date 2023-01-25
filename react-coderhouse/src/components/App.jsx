import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
/* 
Class => className
<input> => <input/>
`${}` =>  {}
style = "nombreClase" => style = {{"nombrePropiedad" : "valor"}}
Mayor parte de propiedades en camelCase
*/


function App() {
  return (
    <>
      <Navbar/>
      <CartWidget/>
    </>
);
}

export default App;
