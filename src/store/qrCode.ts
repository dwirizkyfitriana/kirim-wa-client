import { create } from 'zustand'

import { IQRCode } from '@/interfaces/api'

interface QrState {
    qrCode: IQRCode
    setQrCode: (value: IQRCode) => void
}

export const useQrCodeStore = create<QrState>()(set => ({
    qrCode: {
        image_url: '',
        qr_code: ''
    },
    setQrCode: value => set(() => ({ qrCode: value }))
}))
