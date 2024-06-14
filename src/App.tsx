import { Routes } from './Routes'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { ElectronProvider } from './utils/contexts/electron.context'
import './styles/global.css'

function App() {
  return (
    <ElectronProvider>
      <div className='w-screen h-screen bg-rotion-900 text-base-100 flex'>
        <Sidebar />
        <div className='flex-1 flex flex-col max-h-screen'>
          <Header />
          <Routes />
        </div>
      </div>
    </ElectronProvider>
  )
}

export default App