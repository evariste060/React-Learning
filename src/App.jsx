import Message from "./components/WelcomeMessage"
import Hobbies from "./components/Hobbies"
import CurrentDate from "./components/CurrentDate"
import Button from "./components/CustomizeButton"
import Profile from "./components/ProfileCard"
import ListItems from "./components/ListItems"
import ToggleOnOf from "./events/ToggleOnOf"
import Counter from "./events/Counter"
import ChangeColor from "./events/ChangeColor"
import LoginForm from "./Forms/LoginForm"
export default function App(){
  return (
    <div>
      <Message/>
      <CurrentDate/>
      <Hobbies/>
      <Button color="white" text="Customized button"/>
          <Profile name="Kenny bonheur" age="232" email="keibybonheur@gmail.com"/>
      <ListItems/>
      <ToggleOnOf/>
      <Counter/>
      <ChangeColor/>
      <LoginForm/>
    </div>
  )
}
