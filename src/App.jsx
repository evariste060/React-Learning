import Message from "./components/WelcomeMessage"
import Hobbies from "./components/Hobbies"
import CurrentDate from "./components/CurrentDate"
import Button from "./components/CustomizeButton"
import Profile from "./components/ProfileCard"
import ListItems from "./components/ListItems"
import ToggleOnOf from "./events/ToggleOnOf"
import Counter from "./events/Counter"
import ChangeColor from "./events/ChangeColor"
import Form from "./events/Form"
import Dropdown from "./events/Dropdown"
import LoginForm from "./forms/LoginForm"
import DisplayInput from "./forms/DisplayInput"
import FormValidation from "./forms/FormValidation"
import MultiStepForm from "./forms/MultStep" 
import CheckboxForm from "./forms/Checkbox"
import About from "./routing/About"
import Contact from "./routing/Contact"
import Navigation from "./routing/Navigation"
import { BrowserRouter,Routes, Route, Link } from "react-router-dom"
import ProductDetails from "./routing/ProductDetails"
import NotFound from "./routing/NotFound"
import Blog from "./routing/blog"
import BlogPost from "./routing/blogPost"
import Lectures from "./RegistrationForm/Lectures"
function Home(){
  return (
    <div>
      <Navigation/>
      <Message/>
      <CurrentDate/>
      <Hobbies/>
      <Button color="white" text="Customized button"/>
      <Profile name="Nkurunziza Evariste" age="21" email="Evariste060@gmailcom"/>
      <ListItems/>
      <ToggleOnOf/>
      <Counter/>
      <ChangeColor/>
      <Form/>
      <Dropdown/>
      <LoginForm/>
      <DisplayInput/>
      <FormValidation/>
      <MultiStepForm/>
      <CheckboxForm/>
      <Lectures/>
    </div>
  )
}
export default function App(){
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/blog" element={<Blog />}>
        <Route path=":id" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      
  )
}
