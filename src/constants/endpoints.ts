const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL

export default {
    ENDPOINT_VERSION: BASE_URL + '/',
    ENDPOINT_DEVICES: BASE_URL + '/v1/devices',
    ENDPOINT_GENERATE_QR_CODE: BASE_URL + '/v1/qr',
    ENDPOINT_GROUP: BASE_URL + '/v1/groups',
    ENDPOINT_MESSAGES: BASE_URL + '/v1/messages',
    ENDPOINT_INCOMING_MESSAGES: BASE_URL + '/v1/incoming-messages',
    ENDPOINT_BATCH_MESSAGES: BASE_URL + '/v1/batch-message',
    ENDPOINT_WEBHOOKS: BASE_URL + '/v1/webhooks',
    ENDPOINT_WEBHOOKS_RESPONSE: BASE_URL + '/v1/webhooks-response',
    ENDPOINT_QUOTAS: BASE_URL + '/v1/quotas',
    ENDPOINT_RECONNECT: BASE_URL + '/v1/reconnect'
}
