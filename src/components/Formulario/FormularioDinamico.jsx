import React, { useState, useEffect } from 'react'
import Button from '../../Shared/Button'
import Input from '../../Shared/Input'

const FormularioDinamico = (props) => {
    const { initialState, inputs, formTitle, required, onSubmit } = props

    const [form, setForm] = useState(initialState)

    // esto es para que me actualice el valor del input
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    // IMPORTANTE: Esto es para que vuelva a setear el "initalState" al cambiar de Login a Register. (Actualiza el estado de cada "form")
    // de lo contrario, algunos valores de los inputs no se tomaran
    useEffect(() => {
        setForm(initialState);
      }, [initialState]);

    return (
        <div>
            <form onSubmit={onSubmit ? (e) => onSubmit(e, form) : null}> {/* esto es para que espere a ser clickeado, sino llamaría directamanete la fun 'handleSubmit' */}
                <h1 style={{ color: 'orange', textAlign: 'center' }}>{formTitle}</h1>

                {inputs?.map(({ placeholder, id, name, type }) => (
                    <Input key={id}
                        placeholder={placeholder}
                        name={name}
                        type={type}
                        required={required}
                        onChange={handleChange}
                    />
                ))}
                <br />
                <Button text_button={"ENVIAR"} className={"btn btn-success"} />
            </form>
        </div>
    )
}

export default FormularioDinamico