import './signup.css';

//Pantalla Singup
function Signup() {
    return (
        <div>
            <div class="main-register">
                <div class="formulario">
                    <div className='title'>
                        <nav>
                            <ul>
                                <li>
                                Singup
                                <span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <form action="">
                        <div className='input-box'>
                            <input type="text" required/>
                            <label>Nombre</label>
                        </div>
                        <div className='input-box'>
                            <input type="text" required/>
                            <label>Apellido</label>
                        </div>
                        <div className='input-box'>
                            <input type="text" required/>
                            <label>Email</label>
                        </div>
                        <div className='input-box'>
                            <input type="password" required/>
                            <label>Contraseña</label>
                        </div>
                        <div className='input-box'>
                            <input type="number" required/>
                            <label>Telefono</label>
                        </div>
                        <div className='input-box'>
                            <input type="number" required/>
                            <label>DNI</label>
                        </div>
                        <div className='input-box'>
                            <input type="number" required/>
                            <label>Date</label>
                        </div>
                        <div className='radio-box'>
                            <input type="radio" id='lang-1' name='lang' checked/>
                            <label className='label label-1' htmlFor="lang-1">Locador</label>
                            <input type="radio" id='lang-2' name='lang' checked/>
                            <label className='label label-2' htmlFor="lang-2">Locatario</label>
                        </div>
                        <div className='block'>
                            <button className='btn from-top'>Enviar</button>
                        </div>
                    </form>
                    <div className='register'>
                        Ya tiene una cuenta? <a href='http://localhost:3000/#'>Ingrese</a>
                    </div>
                </div>
            </div>

        </div>
    ); 
  }

  export default Signup;