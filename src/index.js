require('dotenv').config();
const app =require('./server')
require('./database')
const port =3000;


app.listen(app.get('port'),() => {
console.log('conected in server'+app.get('port'))

})