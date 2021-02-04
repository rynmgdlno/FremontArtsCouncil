import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

// Pages
import Home from './pages/home/home'
import Mission from './pages/mission/mission'
import Story from './pages/story/story'
import Commitment from './pages/commitment/commitment'
import Troll from './pages/troll/troll'
import Board from './pages/board/board'
import Contact from './pages/contact/contact'
import Sponsors from './pages/sponsors/sponsors'
import Latest from './pages/latest/latest'
import Press from './pages/press/press'
import UpcomingEvents from './pages/upcoming-events/upcoming-events'
import Solstice from './pages/solstice/solstice'
import Luminata from './pages/luminata/luminata'
import Trolloween from './pages/trolloween/trolloween'
import WinterFeast from './pages/winter-feast/winter-feast'
import MayDay from './pages/mayday/mayday'
import Parade from './pages/parade/parade'
import Participate from './pages/participate/participate'
import Gallery from './pages/gallery/gallery'
import Workshops from './pages/workshops/workshops'
import Teach from './pages/teach/teach'
import Artists from './pages/artists/artists'
import Membership from './pages/membership/membership'
import Donate from './pages/donate/donate'
import Volunteer from './pages/volunteer/volunteer'
import SponsorUs from './pages/sponsor-us/sponsor-us'
import Meetings from './pages/meetings/meetings'
// Components
import Container from './components/container/container'

import './App.css';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Route exact path='/' render={(props) => <Container {...props} page={Home}/>}/>
      <Route exact path='/mission' render={(props) => <Container {...props} page={Mission}/>} />
      <Route exact path='/story' render={(props) => <Container {...props} page={Story}/>} />
      <Route exact path='/commitment' render={(props) => <Container {...props} page={Commitment}/>} />
      <Route exact path='/troll' render={(props) => <Container {...props} page={Troll}/>} />
      <Route exact path='/board' render={(props) => <Container {...props} page={Board}/>} />
      <Route exact path='/contact' render={(props) => <Container {...props} page={Contact}/>} />
      <Route exact path='/sponsors' render={(props) => <Container {...props} page={Sponsors}/>} />
      <Route exact path='/latest' render={(props) => <Container {...props} page={Latest}/>} />
      <Route exact path='/press' render={(props) => <Container {...props} page={Press}/>} />
      <Route exact path='/upcomingevents' render={(props) => <Container {...props} page={UpcomingEvents}/>} />
      <Route exact path='/solstice' render={(props) => <Container {...props} page={Solstice}/>} />
      <Route exact path='/luminata' render={(props) => <Container {...props} page={Luminata}/>} />
      <Route exact path='/trolloween' render={(props) => <Container {...props} page={Trolloween}/>} />
      <Route exact path='/winterfeast' render={(props) => <Container {...props} page={WinterFeast}/>} />
      <Route exact path='/mayday' render={(props) => <Container {...props} page={MayDay}/>} />
      <Route exact path='/parade' render={(props) => <Container {...props} page={Parade}/>} />
      <Route exact path='/participate' render={(props) => <Container {...props} page={Participate}/>} />
      <Route exact path='/gallery' render={(props) => <Container {...props} page={Gallery}/>} />
      <Route exact path='/workshops' render={(props) => <Container {...props} page={Workshops}/>} />
      <Route exact path='/teachaworkshop' render={(props) => <Container {...props} page={Teach}/>} />
      <Route exact path='/artists' render={(props) => <Container {...props} page={Artists}/>} />
      <Route exact path='/membership' render={(props) => <Container {...props} page={Membership}/>} />
      <Route exact path='/donate' render={(props) => <Container {...props} page={Donate}/>} />
      <Route exact path='/volunteer' render={(props) => <Container {...props} page={Volunteer}/>} />
      <Route exact path='/sponsorus' render={(props) => <Container {...props} page={SponsorUs}/>} />
      <Route exact path='/communitymeetings' render={(props) => <Container {...props} page={Meetings}/>} />
    </HashRouter>
  );
}

export default App;
