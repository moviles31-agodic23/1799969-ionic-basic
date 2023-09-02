

const Form = document.getElementById('Form')
const Articulo = document.getElementById('Articulo')
const Precio = document.getElementById('Precio')
const UlArticulo = document.getElementById('UlArticulo')
const UlPrecios = document.getElementById('UlPrecios')
const Total = document.getElementById('Total')

var Array = []

Form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (Precio.value === '' || Articulo.value === '') {
        return
    }
    
    const Data = {
        Articulo: Articulo.value,
        Precio: Precio.value
    }
    
    Array.push(Data)

    UlArticulo.innerHTML = ''
    Array.map((Articulo) => {
        UlArticulo.innerHTML += 
        `
            <li>${Articulo.Articulo}</li>
        `
    })
    
    UlPrecios.innerHTML = ''
    let TotalArticulos = 0
    Array.map((Precio) => {
        TotalArticulos = TotalArticulos + parseInt(Precio.Precio)
        UlPrecios.innerHTML += 
        `
            <li>$${Precio.Precio}</li>
        `
        Total.textContent = `TOTAL $${TotalArticulos}`
    })
})