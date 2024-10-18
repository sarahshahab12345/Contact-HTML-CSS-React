import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactText from './Components/ContectText/ContactText'
import Nav from './Components/Nav/Nav'

function App() {

  return (
    <>
    <Nav/>
    <main className='main_container'>
    <ContactText/>
    <ContactForm/>
    </main>
    </>
  )
}

export default App
