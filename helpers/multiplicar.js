const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base=0, listar = false, hasta = 0) => {
   
    try{
            let texto = '';
            let consola = '';
        
            for(let i=1; i<=hasta; i++){
                texto += `${base} x ${i} = ${base * i}\n`;
                consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            }

            if(listar) {
            console.log(consola);
            }
            
            fs.writeFileSync(`./textos/tabla-${base}.txt`, texto);

            return (`tabla-${base}.txt`);
    }
    catch(error){
        throw err;
        }    
    }

module.exports = {
    crearArchivo
}
