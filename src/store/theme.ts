import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light'

interface ThemeState {
    theme: Theme
    setTheme: (value: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
    persist(
        set => ({
            theme: 'dark',
            setTheme: value => set(() => ({ theme: value }))
        }),
        {
            name: 'theme-storage'
        }
    )
)
