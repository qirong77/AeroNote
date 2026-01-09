import './App.css'
import Editor from './components/Editor'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AeroNote</h1>
      </header>
      <main className="app-content">
        <Editor />
      </main>
    </div>
  )
}

export default App
