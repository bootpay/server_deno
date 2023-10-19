import axiod, { AxiosRequestConfig } from "https://deno.land/x/axiod/mod.ts"

export interface AccessTokenResponseParameters {
    expire_in: number
    access_token: string
}

export interface ReceiptResponseParameters {
    receipt_id: string
    order_id: string
    price: number
    tax_free: number
    cancelled_price: number
    cancelled_tax_free: number
    order_name: string
    company_name: string
    gateway_url: string
    metadata: string
    sandbox: boolean
    pg: string
    method: string
    method_symbol: string // legacy method alias
    method_origin: string
    method_origin_symbol: string // legacy method origin alias
    purchased_at?: Date
    requested_at: Date
    cancelled_at?: Date
    status: number
    status_locale: string
    receipt_url?: string
    card_data?: CardData,
    phone_data?: PhoneData,
    bank_data?: BankData
    vbank_data?: BankData
    escrow_data?: EscrowData
    cash_receipt_data?: CashReceiptData
    naver_point_data?: NaverPointData
    kakao_moneny_data?: KakaoMoneyData
    payco_point_data?: PaycoPointData
    toss_point_data?: TossPointData
}

export interface ExtraModel {
    subscribe_test_payment: boolean
}

export interface UserModel {
    id?: string
    username?: string
    phone?: string
    email?: string
}

export interface CompanyModel {
    name?: string
    phone?: string
    zipcode?: string
    addr1?: string
    addr2?: string
}

export interface ItemModel {
    id?: string
    name?: string
    qty?: number
    price?: number
}

export interface BillingData {
    card_no: string
    card_company: string
    card_company_code: string
    card_type: number
    card_hash?: string
    rtn_key_info?: string // KCP 전용 리턴값
}

export interface CardData {
    tid: string
    card_approve_no: string
    card_no: string
    card_quota: string
    card_company_code: string
    card_company: string
    card_interest: string
    receipt_url?: string
    card_type?: string
    card_owner_type?: string
    point?: number
}

export interface PhoneData {
    tid: string
    auth_no?: string
    phone?: string
    receipt_url?: string
}

export interface BankData {
    tid: string
    bank_code: string
    bank_name: string
    back_username: string
    bank_account?: string
    sender_name?: string
    expired_at?: Date
    cash_receipt_tid?: string
    cash_receipt_type?: string
    cash_receipt_no?: string
    receipt_url?: string
}

export interface EscrowData {
    status: number
    status_locale: string
    shipping_started_at: Date
    receipt_confirmed_at: Date | null
}

export interface CashReceiptData {
    tid?: string
    cash_receipt_type?: number
    cash_receipt_no?: string
    receipt_url?: string
}

export interface KakaoMoneyData {
    tid?: string
}

export interface NaverPointData {
    tid?: string
}

export interface PaycoPointData {
    tid?: string
}

export interface TossPointData {
    tid?: string
}

export interface CancelPaymentParameters {
    receipt_id: string
    cancel_price?: number
    cancel_tax_free?: number
    cancel_id?: string
    cancel_username?: string
    cancel_message?: string
    refund?: Refund
}

export interface Refund {
    bank_account: string
    back_username: string
    bank_code: string
}

export interface CertificateResponseParameters {
    receipt_id: string
    authenticate_id: string
    pg: string
    method: string
    method_origin: string
    method_origin_symbol: string
    authenticated_at: Date
    requested_at: Date
    status: number
    status_locale: string
    authenticate_data: AuthenticateData
}

export interface AuthenticateData {
    name?: string
    phone?: string
    unique?: string
    birth?: Date
    gender?: number
    foreigner?: number
    carrier?: string
    number_of_realarms?: number
    tid: string
}

export interface SubscriptionBillingRequestParameters {
    pg: string
    method?: string
    order_name: string
    subscription_id: string
    card_no: string
    card_pw: string
    card_identity_no: string
    card_expire_year: string
    card_expire_month: string
    price?: number
    tax_free?: number
    extra: ExtraModel
    user: UserModel
    metadata?: object
}

export interface SubscriptionBillingResponseParameters {
    billing_key: string
    billing_data: BillingData
    receipt_id: string
    subscription_id: string
    gateway_url?: string
    metadata: object
    pg: string
    method: string
    method_origin?: string
    method_symbol?: string
    published_at: Date
    requested_at: Date
    receipt_data: ReceiptResponseParameters
    billing_expire_at: Date
    status: number
    status_locale?: string
}

export interface SubscriptionCardPaymentRequestParameters {
    billing_key: string
    order_name: string
    price: number
    tax_free?: number
    card_quota?: string
    card_interest?: string
    order_id: string
    items?: Array<ItemModel>
    user?: UserModel
    extra?: ExtraModel
}

export interface DestroySubscribeResponseParameters {
    billing_key: string
}

export interface UserTokenRequestParameters {
    user_id: string
    email?: string
    username?: string
    gender?: number
    birth?: string
    phone?: string
}

export interface UserTokenResponseParameters {
    user_token: string
    expired_at: Date
}

export interface SubscribePaymentReserveParameters {
    billing_key: string
    order_name: string
    price: number
    tax_free?: number
    order_id: string
    reserve_execute_at: Date
    user?: UserModel
    items?: ItemModel
    metadata?: any
    feedback_url?: string
    content_type?: 'application/json' | 'application/x-www-form-urlencoded'
}

export interface ShippingRequestParameters {
    receipt_id: string
    tracking_number: string
    delivery_corp: string
    shipping_prepayment?: boolean
    shipping_day?: number
    user?: UserModel
    company?: CompanyModel
}

export interface SubscribePaymentReserveResponse {
    reserve_id: string
    reserve_execute_at: Date
}

export interface CancelSubscribeReserveResponse {
    reserve_id: string
    success: boolean
}

export interface CashReceiptPublishOnReceiptParameters {
    receipt_id: string
    username?: string
    email?: string
    phone?: string
    identity_no: string
    cash_receipt_type: '소득공제' | '지출증빙'
    currency?: string
}

export interface CashReceiptCancelOnReceiptParameters {
    receipt_id: string
    cancel_username?: string
    cancel_message?: string
}

export interface RequestCashReceiptParameters {
    pg: string
    price: number
    tax_free?: number
    order_name: string
    cash_receipt_type: '소득공제' | '지출증빙'
    identity_no: string
    purchased_at?: Date
    order_id: string
    user?: UserModel
    extra?: ExtraModel
}

export interface CancelCashReceiptParameters {
    receipt_id: string
    cancel_username?: string
    cancel_message?: string
}

export interface RequestAuthenticateParameters {
    authentication_id: string
    pg: string
    method: string
    username: string
    identity_no: string
    carrier: string
    phone: string
    site_url?: string
    authenticate_type?: 'sms' | 'pass'
    order_name: string
    extra?: ExtraModel
    user?: UserModel
    metadata?: object
}

export interface SubscribePaymentLookupResponse {
    reserve_id: string
    receipt_id?: string
    order_id: string
    price: number
    tax_free: number
    order_name: string
    user: UserModel
    feedback_url: string
    metadata?: any,
    content_type: 'application/json' | 'application/x-www-form-urlencoded',
    version: number
    extra: ExtraModel
    reserve_requested_at: string
    reserve_execute_at: string
    reserve_started_at: string
    reserve_finished_at: string
    reserve_revoked_at: string
    status: number
}

const ableMode = ['development', 'stage', 'production']

export const BootpayClient = () => {
    return {
        sdkVersion:      '1.0.0',
        apiVersion:      '4.3.3',
        API_ENTRYPOINTS: {
            development: 'https://dev-api.bootpay.co.kr/v2',
            stage:       'https://stage-api.bootpay.co.kr/v2',
            production:  'https://api.bootpay.co.kr/v2'
        },
        config:          {
            application_id: '',
            private_key:    '',
            mode:           'production'
        },
        http:            undefined,
        token:           undefined,
        applicationId:   undefined,
        privateKey:      undefined,
        debug:           false,
        setConfiguration(configuration) {
            this.http   = axiod.create({
                timeout: 60000,
                headers: {
                    'Content-Type':        'application/json',
                    'Accept':              'application/json',
                    'BOOTPAY-SDK-TYPE':    306,
                    'BOOTPAY-SDK-VERSION': this.sdkVersion,
                    'BOOTPAY-API-VERSION': this.apiVersion
                }
            })
            this.config = {
                application_id: configuration.application_id,
                private_key:    configuration.private_key,
                mode:           ableMode.indexOf(configuration.mode) > -1 ? configuration.mode : 'production'
            }
            this.http.interceptors.request.use((config) => {
                if (this.token !== undefined) {
                    config.headers.Authorization = `Bearer ${ this.token }`
                }
                return config
            }, (error) => {
                return Promise.reject(error)
            })
            this.http.interceptors.response.use((response): any => {
                if (response.request !== undefined && response.headers !== undefined) {
                    return response.data
                } else {
                    // 오류를 리턴
                    return response.data
                }
            }, (error) => {
                if (error.response !== undefined) {
                    return Promise.reject(error.response.data)
                } else {
                    if (this.debug) {
                        throw error
                    } else {
                        return Promise.reject({
                            error_code: -100,
                            message:    `Request Rest Api Failed to Bootpay Server, ${ error.message }`
                        })
                    }
                }
            })
        },
        entrypoints(uri: string) {
            return [this.API_ENTRYPOINTS[this.config.mode], uri].join('/')
        },

        async get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
            try {
                const response: T = await this.http.get(this.entrypoints(url), config)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        async post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
            try {
                const response: T = await this.http.post(this.entrypoints(url), data, config)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        async put<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> {
            try {
                const response: T = await this.http.put(this.entrypoints(url), data, config)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        async delete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> {
            try {
                const response: T = await this.http.delete(this.entrypoints(url), config)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        /**
         * Access Token을 가져오기
         * Comment by GOSOMI
         * @date: 2023-10-19
         */
        async getAccessToken(): Promise<AccessTokenResponseParameters> {
            try {
                const { application_id, private_key } = this.config
                const response                        = await this.post('/request/token', {
                    application_id,
                    private_key
                })
                this.token                            = response.access_token
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        /**
         * 결제 단건 조회
         * Comment by GOSOMI
         * @date: 2023-10-19
         */
        async receiptPayment(receiptId: string): Promise<ReceiptResponseParameters> {
            try {
                const repsonse = await this.get(`receipt/${ receiptId }`)
                return Promise.resolve(repsonse)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        /**
         * 결제 취소 요청
         * Comment by GOSOMI
         * @date: 2023-10-19
         */
        async cancelPayment(cancelPayment: CancelPaymentParameters): Promise<ReceiptResponseParameters> {
            try {
                const response = await this.post(`cancel`, cancelPayment)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        /**
         * 본인인증 정보 조회
         * Comment by GOSOMI
         * @date: 2023-10-19
         */
        async certificate(receiptId: string): Promise<CertificateResponseParameters> {
            try {
                const response = await this.get(`certificate/${ receiptId }`)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        /**
         * Request Confirm Payment
         * Comment by GOSOMI
         * @date: 2023-10-19
         */
        async confirmPayment(receiptId: string): Promise<ReceiptResponseParameters> {
            try {
                const response = await this.post(`receipt`, {
                    receipt_id: receiptId
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        /**
         *  빌링키 조회
         * Comment by GOSOMI
         * @date: 2023-10-19
         */
        async lookupSubscribeBillingKey(receiptId: string): Promise<SubscriptionBillingResponseParameters> {
            try {
                const response = await this.get(`subscribe/billing/${ receiptId }`)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * requestSubscribeBillingKey
         * Comment by GOSOMI
         * @param subscriptionBillingRequest: SubscriptionBillingRequestParameters
         * @returns Promise<SubscriptionBillingResponseParameters>
         */
        async requestSubscribeBillingKey(subscriptionBillingRequest: SubscriptionBillingRequestParameters): Promise<SubscriptionBillingResponseParameters> {
            try {
                const response: SubscriptionBillingResponseParameters = await this.post<SubscriptionBillingResponseParameters>('request/subscribe', {
                    ...subscriptionBillingRequest
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * requestSubscribeCardPayment
         * Comment by GOSOMI
         * @param subscriptionCardRequest: SubscriptionCardPaymentRequestParameters
         * @returns Promise<ReceiptResponseParameters>
         */
        async requestSubscribeCardPayment(subscriptionCardRequest: SubscriptionCardPaymentRequestParameters): Promise<ReceiptResponseParameters> {
            try {
                const response: ReceiptResponseParameters = await this.post<ReceiptResponseParameters>('subscribe/payment', {
                    ...subscriptionCardRequest
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * destroyBillingKey
         * Comment by GOSOMI
         * @param billingKey:string
         * @returns Promise<DestroySubscribeResponseParameters>
         */
        async destroyBillingKey(billingKey: string): Promise<DestroySubscribeResponseParameters> {
            try {
                const response: DestroySubscribeResponseParameters = await this.delete<DestroySubscribeResponseParameters>(`subscribe/billing_key/${ billingKey }`)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * requestUserToken
         * Comment by GOSOMI
         * @param userTokenRequest:UserTokenRequestParameters
         * @returns Promise<UserTokenResponseParameters>
         */
        async requestUserToken(userTokenRequest: UserTokenRequestParameters): Promise<UserTokenResponseParameters> {
            try {
                const response: UserTokenResponseParameters = await this.post<UserTokenResponseParameters>('request/user/token', {
                    ...userTokenRequest
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * subscribePaymentReserve
         * Comment by GOSOMI
         * @param subscribePaymentReserveRequest:SubscribePaymentReserveParameters
         * @returns Promise<SubscribePaymentReserveResponse>
         */
        async subscribePaymentReserve(subscribePaymentReserveRequest: SubscribePaymentReserveParameters) {
            try {
                const response: SubscribePaymentReserveResponse = await this.post<SubscribePaymentReserveResponse>('subscribe/payment/reserve', {
                    ...subscribePaymentReserveRequest
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * SubscribeReserve Lookup
         * Comment by GOSOMI
         * @date: 2023-03-07
         * @param reserveId: string
         * @returns Promise<SubscribeLookupResponse>
         */
        async subscribePaymentReserveLookup(reserveId: string) {
            try {
                const response: SubscribePaymentLookupResponse = await this.get<SubscribePaymentLookupResponse>(`subscribe/payment/reserve/${ reserveId }`)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * cancelSubscribeReserve
         * Comment by GOSOMI
         * @param reserveId:string
         * @returns Promise<CancelSubscribeReserveResponse>
         */
        async cancelSubscribeReserve(reserveId: string) {
            try {
                const response: CancelSubscribeReserveResponse = await this.delete<CancelSubscribeReserveResponse>(`subscribe/payment/reserve/${ reserveId }`)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 배송시작 REST API 시작
         * Comment by GOSOMI
         * @date: 2022-06-14
         */
        async shippingStart(shippingRequest: ShippingRequestParameters): Promise<ReceiptResponseParameters | any> {
            try {
                const response: ReceiptResponseParameters = await this.put<ReceiptResponseParameters>(`escrow/shipping/start/${ shippingRequest.receipt_id }`, shippingRequest)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 기존결제 현금영수증 발행 API
         * Comment by GOSOMI
         * @date: 2022-07-28
         */
        async cashReceiptPublishOnReceipt(cashReceiptPublishRequest: CashReceiptPublishOnReceiptParameters) {
            try {
                const response: ReceiptResponseParameters = await this.post<ReceiptResponseParameters>('request/receipt/cash/publish', cashReceiptPublishRequest)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 기존 결제 현금영수증 발행 취소 API
         * Comment by GOSOMI
         * @date: 2022-08-09
         */
        async cashReceiptCancelOnReceipt(cashReceiptCancelRequest: CashReceiptCancelOnReceiptParameters) {
            try {
                const response: null = await this.delete<null>(`request/receipt/cash/cancel/${ cashReceiptCancelRequest.receipt_id }`, {
                    params: cashReceiptCancelRequest
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 별건 현금영수증 발행하기
         * Comment by GOSOMI
         * @date: 2022-08-09
         */
        async requestCashReceipt(cashReceiptRequest: RequestCashReceiptParameters) {
            try {
                const response: ReceiptResponseParameters = await this.post<ReceiptResponseParameters>('request/cash/receipt', cashReceiptRequest)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 별건 현금영수증 취소하기
         * Comment by GOSOMI
         * @date: 2022-08-09
         */
        async cancelCashReceipt(cancelCashReceiptRequest: CancelCashReceiptParameters) {
            try {
                const response: ReceiptResponseParameters = await this.delete<ReceiptResponseParameters>(`request/cash/receipt/${ cancelCashReceiptRequest.receipt_id }`, {
                    params: cancelCashReceiptRequest
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 본인인증 REST API 요청
         * Comment by GOSOMI
         * @date: 2022-11-07
         */
        async requestAuthentication(authenticateRequest: RequestAuthenticateParameters) {
            try {
                const response: CertificateResponseParameters = await this.post<CertificateResponseParameters>('request/authentication', authenticateRequest)
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 본인인증 승인하기
         * Comment by GOSOMI
         * @date: 2022-11-07
         */
        async confirmAuthentication(receipt_id: string, otp: null | string = null) {
            try {
                const response: CertificateResponseParameters = await this.post<CertificateResponseParameters>('authenticate/confirm', {
                    receipt_id,
                    otp
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        },

        /**
         * 본인인증 SMS 재전송
         * Comment by GOSOMI
         * @date: 2022-11-07
         */
        async realarmAuthentication(receipt_id: string) {
            try {
                const response: CertificateResponseParameters = await this.post<CertificateResponseParameters>('authenticate/realarm', {
                    receipt_id
                })
                return Promise.resolve(response)
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }
}