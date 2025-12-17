import Message from "./components/WelcomeMessage"
import Hobbies from "./components/Hobbies"
import CurrentDate from "./components/CurrentDate"
import Button from "./components/CustomizeButton"
import Profile from "./components/ProfileCard"
import ListItems from "./components/ListItems"
import ToggleOnOf from "./events/ToggleOnOf"
import Counter from "./events/Counter"
import ChangeColor from "./events/ChangeColor"
export default function App(){
  return (
    <div>
      <Message/>
      <CurrentDate/>
      <Hobbies/>
      <Button color="green-700" text="Customized button "/>
      <Profile name="Nkurunziza Evariste" age="21" email="Evariste060@gmailcom"/>
      <ListItems/>
      <ToggleOnOf/>
      <Counter/>
      {/* <ChangeColor/> */}
    </div>
  )
}
