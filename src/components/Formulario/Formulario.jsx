import React, { useState } from 'react'
import Button from '../../Shared/Button'

const Formulario = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const { email, password } = form; // (DESTRUCTURACION)

    // esto es para que me actualice el valor del input
    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({
            ...form, //hago una "copia" del form para sobrescribir el valor
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        //para que no recargue la página
        e.preventDefault()
        console.log(form)
        //restablezco los datos, despues de enviar, a vacio
        setForm({
            email: '',
            password: ''
        })
    }


    return (
        <form onSubmit={handleSubmit} style={{ margin: '0 auto', border: 'solid black 6px', borderRadius: '10px' }}>
            <h1 style={{ color: 'orange', textAlign: 'center' }}>Formulario</h1>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} value={email} name='email' type="email" className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input onChange={handleChange} value={password} name='password' type="password" className="form-control" id="inputPassword3" />
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button text_button='Enviar' className='btn btn-warning' />
            </div>
        </form>
    )
}

export default Formulario