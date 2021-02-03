import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Main from './pages/main/main'

import './App.css';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Route exact path='/' component={Main}/>
      {/* Header */}
      {/* -------- Link to Donate */}
      {/* -------- Link to Volunteer */}
      {/* Menu */}
      {/* About Us */}
      <Route exact path='/mission' render={(props) => <Main {...props} page={Mission}/>} />
      <Route exact path='/story' render={(props) => <Main {...props} page={Story}/>} />
      <Route exact path='/commitment' render={(props) => <Main {...props} page={Commitment}/>} />
      <Route exact path='/troll' render={(props) => <Main {...props} page={Troll}/>} />
      <Route exact path='/board' render={(props) => <Main {...props} page={Board}/>} />
      <Route exact path='/contact' render={(props) => <Main {...props} page={Contact}/>} />
      <Route exact path='/sponsors' render={(props) => <Main {...props} page={Sponsors}/>} />
      {/* News */}
      <Route exact path='/latest' render={(props) => <Main {...props} page={Latest}/>} />
      <Route exact path='/press' render={(props) => <Main {...props} page={Press}/>} />
      {/* Events */}
      <Route exact path='/upcomingevents' render={(props) => <Main {...props} page={UpcomingEvents}/>} />
      {/* -------- Link to Parade */}
      <Route exact path='/solstice' render={(props) => <Main {...props} page={Solstice}/>} />
      <Route exact path='/luminata' render={(props) => <Main {...props} page={Luminata}/>} />
      <Route exact path='/trolloween' render={(props) => <Main {...props} page={Trolloween}/>} />
      <Route exact path='/winterfeast' render={(props) => <Main {...props} page={WinterFeast}/>} />
      <Route exact path='/mayday' render={(props) => <Main {...props} page={MayDay}/>} />
      {/* Fremont Solstice Parade */}
      <Route exact path='/parade' render={(props) => <Main {...props} page={Parade}/>} />
      <Route exact path='/participate' render={(props) => <Main {...props} page={Participate}/>} />
      <Route exact path='/gallery' render={(props) => <Main {...props} page={Gallery}/>} />
      {/* -------- Link to Sponsors */}
      {/* -------- Link to Solstice */}
      {/* Workshops */}
      <Route exact path='/workshops' render={(props) => <Main {...props} page={Workshops}/>} />
      <Route exact path='/teachaworkshop' render={(props) => <Main {...props} page={Teach}/>} />
      {/* Get Involved */}
      <Route exact path='/artists' render={(props) => <Main {...props} page={Artists}/>} />
      <Route exact path='/membership' render={(props) => <Main {...props} page={Membership}/>} />
      <Route exact path='/donate' render={(props) => <Main {...props} page={Donate}/>} />
      <Route exact path='/volunteer' render={(props) => <Main {...props} page={Volunteer}/>} />
      <Route exact path='/sponsorus' render={(props) => <Main {...props} page={SponsorUs}/>} />
      <Route exact path='/communitymeetings' render={(props) => <Main {...props} page={Meetings}/>} />
    </HashRouter>
  );
}

export default App;
