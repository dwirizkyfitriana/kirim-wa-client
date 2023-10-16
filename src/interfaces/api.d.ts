export interface IVersion {
    message: string
    version: string
    stability: string
}
export interface IMeta {
    location?: string
    last_key?: string
}
export interface IResponse {
    id: string
    status: string
    created_at?: string
    message?: string
    meta: Pick<IMeta, 'location'>
}
export interface IDeviceResponse extends Omit<IResponse, 'message'> {}
export interface IMessageResponse extends Omit<IResponse, 'created_at'> {}
export interface IDevices {
    id: string
    status: string
    created_at: string
    connected_at: string
    disconnected_at: string
    disconnected_reason: string
}
export interface IQRCode {
    qr_code: string
    image_url: string
}
export interface IMessageItem {
    phone_number: string
    message: string
    device_id: string
    message_type?: 'text' | 'image' | 'document'
    caption?: string | null
    is_group_message?: boolean
    send_at?: boolean
}
export interface IMessage {
    id: string
    message: string
    status: string
    created_at: string
    payload: IMessageItem
}
export interface IMessageFilter {
    start_key?: string
    status?: 'pending' | 'success' | 'fail'
    date?: string
}
