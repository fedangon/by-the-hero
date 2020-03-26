const crypto = require('crypto');  
const connection = require('../database/connection');

module.exports = {
    
    //listar
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    
    //criar
    async create (request, response) {
    
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //função randomBytes para criar um id randomico do pacote CRYPTO

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};