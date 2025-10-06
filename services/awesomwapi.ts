let baseUrl = 'https://economia.awesomeapi.com.br/json';

export const getUSD = async () => {
    try {
        let url = baseUrl + '/last/USD-BRL?token=714342914b936347ca5dde88fe47e61d32d755eb37ee743af86dc30bab6c04e2';
        const req = await fetch(url);
        const json = await req.json();

        if (json.USDBRL){
            return parseFloat(json.USDBRL.ask);
        }
        return 0;
    } catch (error){
        return 0;
    }
}

export const getEUR = async () => {
    try {
        let url = baseUrl + '/last/EUR-BRL?token=714342914b936347ca5dde88fe47e61d32d755eb37ee743af86dc30bab6c04e2';
        const req = await fetch(url);
        const json = await req.json();

        if (json.EURBRL){
            return parseFloat(json.EURBRL.ask);
        }
        return 0;
    } catch (error){
        return 0;
    }
}