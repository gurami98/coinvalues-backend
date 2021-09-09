const axios = require('axios');
const getCoins = async (req, res) => {
    try{
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': '6c5e97f3-9cdb-438f-8b01-77b71c8bd419',
                'Accept': 'application/json',
                'Accept-Encoding': 'deflate, gzip'
            },
            json: true,
            deflate: true,
            gzip: true
        })
        res.status(200).send(response.data)
    }catch(e){
        res.status(401).send('Error fetching data')
    }
}

const getCurrentCoin = async (req, res) => {
    try{
        const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${req.params.symbol}`, {
            headers: {
                'X-CMC_PRO_API_KEY': '6c5e97f3-9cdb-438f-8b01-77b71c8bd419',
                'Accept': 'application/json',
                'Accept-Encoding': 'deflate, gzip'
            },
            json: true,
            deflate: true,
            gzip: true
        })
        res.status(200).send(response.data)
    }catch(e){
        res.status(401).send('Error fetching data')
    }
}

module.exports = {getCoins, getCurrentCoin}