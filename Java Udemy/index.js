import _ from 'lodash'

const a = [1, 2, 3, 4, 5, 6]
const slices = _.chunk(a, 2)

console.log( slices);