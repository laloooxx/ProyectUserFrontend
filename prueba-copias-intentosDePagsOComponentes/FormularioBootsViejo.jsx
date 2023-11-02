export default function formViejo() {
    return(//un formulario de bootstrap para crear usuarios
    <form className="user-form" onSubmit={handleSubmit}>
        <h2>Crear Usuario</h2>
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" value={username} onChange={(Event) => setUsername(Event.target.value)}/>
            <label htmlFor ="floatingInput">Nombre de usuario</label>
        </div>
        <br />
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(Event) => setEmail(Event.target.value)}/>
            <label htmlFor ="floatingInput">Correo electronico</label>
        </div>
        <br />
        <div className="form-floating">
            <input type="password" className="form-control" id="password" placeholder="Contraseña" value={password} onChange={(Event) => setPassword(Event.target.value)} />
            <label htmlFor ="floatingPassword">Contraseña</label>
        </div>
        <br />
        <br />
        <button type="submit" style={{color: 'black'}}>Enviar</button>
    </form>)
}