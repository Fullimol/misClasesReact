import React from 'react'

const Container = (props) => {
const {full_width, children,dFlex} = props

  return (
    <div className={`${full_width ? 'container-fluid' : 'container'} ${dFlex ? 'd-flex justify-content-between' : ""}`}>{children}</div>
    //                 si este 'full_widht' existe, poner 'container-fluid', SI NO exite poner 'container'
    // "children" es equivalente a todos los componentes que metere dentro de este componente 'container'.
  )
}

export default Container