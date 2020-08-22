import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

export  class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
          this.state={
              email:"",
              password:"",
              register:false
            }
     this.setRegister=this.setRegister.bind(this)      
    }
  setEmail(e){
      this.setState({email:e.target.value})
  }
  setPassword(e){
    this.setState({password:e.target.value})
}
validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
setRegister(){
    this.setState({register:true})
}
validateNew() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render () {
    return ( 
        <div >
          <form >
            <label>Correo Electronico:</label>
            <input type="text" name="nuevoEmail" 
                    placeholder="Email a registrar"
                    onChange={(e) => this.setEmail(e)} 
                    autofocus></input>
            <label>Contraseña:</label>
            <input type="password" name="nuevoPassword" 
            placeholder="Contraseña"
            onChange={(e) => this.setPassword(e)} 
            autofocus></input>
             <button disabled={!this.validateForm()} type="submit">
                Login
                </button>
          </form>
          <div>
            <p>No poseee una cuenta?</p>
            <Link to="/login/badname">
            <button>Regístrarse</button>
            </Link>         
          </div>
        </div>
      );
    }

}
const mapStateToProps = state => {		
  return {		
   
  }		
}		
const mapDispatchToProps = dispatch => {
  return {


  }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


// registerForm(){
//     return(
//       <div>
//       <form>
//         <label>Usuario:</label>
//         <input type="text" name="email" 
//                 placeholder="Email registrado"
               
//                 autofocus></input>
//         <label>Contraseña:</label>
//         <input type="password" name="password" 
//                 placeholder="Contraseña"
               
//                 autofocus></input>
//         <label>Nueva Contraseña:</label>
//         <input type="password" name="nuevoPassword" 
//                 placeholder="Contraseña"
//                 onChange={(e) => this.setPassword(e)} 
//                 autofocus></input>  
//         <button  type="submit">
//                 Continuar
//                 </button>        

//       </form>                         
//     </div>
//     )
// }