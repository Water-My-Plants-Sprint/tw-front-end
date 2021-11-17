import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import plantlist from "./plantlist";
import Plant from "./components/Plant";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PlantsList from "./components/PlantsList";
import Logout from "./components/Logout";
import Accessibility from "./components/Accessibility";
import userinfo from "./userinfo";
function App() {
  const [plantsList, setPlantsList] = useState(plantlist);
  const [profile, setProfile] = useState(userinfo);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/access">
          <Accessibility
            profile={profile}
            setProfile={setProfile}
            plantsList={plantsList}
            setPlantsList={setPlantsList}
          />
        </Route>

        <Route exact path="/" component={Login} />
        <Route exact path="/plants">
          <PlantsList plantsList={plantsList} setPlantsList={setPlantsList} />
        </Route>

        <Route exact path="/login" component={Login} />
        <Route path="/plants/:id">
          <Plant plantsList={plantsList} setPlantsList={setPlantsList} />
        </Route>
        <Route exact path="/profile">
          <Profile profile={profile} setProfile={setProfile} />
        </Route>
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
