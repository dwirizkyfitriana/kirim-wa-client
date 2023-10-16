import { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/theme'

const Home = lazy(() => import('@/pages/Home'))
const Chats = lazy(() => import('@/pages/Chats'))

const App = () => {
    const setTheme = useThemeStore(state => state.setTheme)

    const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)')

    const setCurrentTheme = (isDark: boolean) => {
        if (isDark) setTheme('dark')
        else setTheme('light')

        document.querySelector('body')?.classList.add(isDark ? 'dark' : 'light')
    }

    setCurrentTheme(prefersDarkMode.matches)

    prefersDarkMode.addEventListener('change', (e: MediaQueryListEvent) =>
        setCurrentTheme(e.matches)
    )

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chats" element={<Chats />} />
            </Routes>
        </Router>
    )
}

export default App
