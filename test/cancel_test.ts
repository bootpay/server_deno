import { BootpayClient } from '../client.ts'

(async () => {
    const Bootpay = BootpayClient()
    Bootpay.setConfiguration({
        // application_id: '59bfc738e13f337dbd6ca48a',
        // private_key:    'pDc0NwlkEX3aSaHTp/PPL/i8vn5E/CqRChgyEp/gHD0=',
        // mode:           'development'
        application_id: '5b8f6a4d396fa665fdc2b5ea',
        private_key: 'rm6EYECr6aroQVG2ntW0A6LpWnkTgP4uQ3H18sDDUYw='
    })
    try {
        const token = await Bootpay.getAccessToken()
        console.log(token)
        const response = await Bootpay.receiptPayment('62b12f4b6262500007629fec')
        console.log(response)
    } catch (e) {
        return console.log(e)
    }
})()