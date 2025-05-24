import _ from 'lodash'

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const slices = _.chunk(a, 3)

console.log(slices);

document.querySelector('#app').innerHTML = `
  <div>
    
    <h1>Utilizzo di Lodash</h1>
    <div>
      <pre>${JSON.stringify(slices, null, 2)}</pre>
    </div>
    
  </div>
`

