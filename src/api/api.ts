import endpoints from '@/constants/endpoints'
import { fetcher } from './fetcher'
import type {
    IDeviceResponse,
    IDevices,
    IMessageItem,
    IMessageResponse,
    IMeta,
    IQRCode,
    IVersion
} from '@/interfaces/api'

// VERSION
export async function getVersion(): Promise<IVersion> {
    return fetcher(endpoints.ENDPOINT_VERSION, {}, 'get')
}

// DEVICES
export async function addDevice(device_id: string): Promise<IDeviceResponse> {
    return fetcher(endpoints.ENDPOINT_DEVICES, { device_id })
}

export async function getDevices(): Promise<{
    data: IDevices[]
    meta: Pick<IMeta, 'last_key'>
}> {
    return fetcher(endpoints.ENDPOINT_DEVICES, {}, 'get')
}

export async function getDeviceById(device_id: string): Promise<IDevices> {
    return fetcher(endpoints.ENDPOINT_DEVICES + `/${device_id}`, {}, 'get')
}

export async function deleteDevice(device_id: string): Promise<void> {
    return fetcher(endpoints.ENDPOINT_DEVICES + `/${device_id}`, {}, 'delete')
}

// QR CODE
export async function fetchQrCode(device_id: string): Promise<IQRCode> {
    return fetcher(endpoints.ENDPOINT_GENERATE_QR_CODE, { device_id }, 'get')
}

// MESSAGES
export async function sendMessage(params: IMessageItem): Promise<IMessageResponse> {
    return fetcher(endpoints.ENDPOINT_MESSAGES, params)
}

export async function getMessages(params: IMessageResponse) {
    return fetcher(endpoints.ENDPOINT_MESSAGES, params, 'get')
}

export async function getMessageById(message_id: string) {
    return fetcher(endpoints.ENDPOINT_MESSAGES + `/${message_id}`, { message_id }, 'get')
}
