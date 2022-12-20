import React from 'react'

function Hard(){
    const arr1 = ['Rene Javier Santiago, 787-600-9370, 19/05/1998', 'Gustavo Sepulveda, 787-555-5555, 5/05/5555', 'Alexandra Belmont, 787-555-5555, 6/06/6666'];
    
    const map = arr1.map(item => item*2 + ",")
    return(
        <h3>{map}</h3>
    )
}

export default Hard;