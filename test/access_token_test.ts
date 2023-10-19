import { BootpayClient } from '../client.ts'

(async () => {
    const Bootpay = BootpayClient()
    Bootpay.setConfiguration({
        application_id: '59b731f084382614ebf72215',
        private_key:    'WwDv0UjfwFa04wYG0LJZZv1xwraQnlhnHE375n52X0U='
    })
    const response = await Bootpay.getAccessToken()
    console.log(response)
})()