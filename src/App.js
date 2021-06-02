import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Home from './pages/home/home'
// About
import About from './pages/about/about'
import Mission from './pages/mission/mission'
import Story from './pages/story/story'
import Commitment from './pages/commitment/commitment'
import Troll from './pages/troll/troll'
import Board from './pages/board/board'
import Contact from './pages/contact/contact'
import Sponsors from './pages/sponsors/sponsors'
// News
import Latest from './pages/latest/latest'
import Post from './pages/post/post'
import Press from './pages/press/press'
// Events
import UpcomingEvents from './pages/events/upcoming-events'
import Solstice from './pages/events/solstice/solstice'
import Luminata from './pages/events/luminata/luminata'
import Trolloween from './pages/events/trolloween/trolloween'
import WinterFeast from './pages/events/winter-feast/winter-feast'
import MayDay from './pages/events/mayday/mayday'
import SecondaryEvent from './pages/secondary-event/secondary-event'
// Parade
import Parade from './pages/parade/parade'
import Participate from './pages/parade/participate/participate'
import Gallery from './pages/parade/gallery/gallery'
import Register from './pages/parade/register/register'
import McKay from './pages/parade/mckay/mckay'
// Workshops
import Workshops from './pages/workshops/workshops'
import LuminaryLantern from './pages/workshops/luminary-lantern-workshops/luminary-lantern-workshops'
import LargeLuminary from './pages/workshops/large-luminary-workshop/large-luminary-workshop'
import TeachWorkshop from './pages/workshops/teach-a-workshop/teach-a-workshop'
// Get Involved
import Artists from './pages/artists/artists'
import Membership from './pages/membership/membership'
import Donate from './pages/donate/donate'
import Volunteer from './pages/volunteer/volunteer'
import SponsorUs from './pages/sponsor-us/sponsor-us'
import Meetings from './pages/meetings/meetings'

import Test from './pages/test'

import FAQ from './pages/faq/faq'
import Photography from './pages/photography/photography'

import Container from './components/container/container'

import './App.scss';

const App = () => {
  return (
    <HashRouter basename='/'>
      {/* Homepage */}
      <Route exact path='/' render={(props) => <Container {...props} page={Home}/>}/>
      {/* About */}
      <Route exact path='/about' render={(props) => <Container {...props} page={About}/>} />
      <Route exact path='/mission' render={(props) => <Container {...props} page={Mission}/>} />
      <Route exact path='/story' render={(props) => <Container {...props} page={Story}/>} />
      <Route exact path='/commitment' render={(props) => <Container {...props} page={Commitment}/>} />
      <Route exact path='/troll' render={(props) => <Container {...props} page={Troll}/>} />
      <Route exact path='/board' render={(props) => <Container {...props} page={Board}/>} />
      <Route exact path='/contact' render={(props) => <Container {...props} page={Contact}/>} />
      <Route exact path='/sponsors' render={(props) => <Container {...props} page={Sponsors}/>} />
      {/* News */}
      <Route exact path='/latest' render={(props) => <Container {...props} page={Latest}/>} />
      <Route exact path='/post/:postID' render={(props) => <Container {...props} page={Post}/>} />
      <Route exact path='/press' render={(props) => <Container {...props} page={Press}/>} />
      {/* Events */}
      <Route exact path='/events' render={(props) => <Container {...props} page={UpcomingEvents}/>} />
      <Route exact path='/solstice' render={(props) => <Container {...props} page={Solstice}/>} />
      <Route exact path='/luminata' render={(props) => <Container {...props} page={Luminata}/>} />
      <Route exact path='/trolloween' render={(props) => <Container {...props} page={Trolloween}/>} />
      <Route exact path='/winter-feast' render={(props) => <Container {...props} page={WinterFeast}/>} />
      <Route exact path='/may-day' render={(props) => <Container {...props} page={MayDay}/>} />
      <Route exact path='/events/:eventID' render={(props) => <Container {...props} page={SecondaryEvent}/>} />
      {/* Parade */}
      <Route exact path='/parade' render={(props) => <Container {...props} page={Parade}/>} />
      <Route exact path='/parade/participate' render={(props) => <Container {...props} page={Participate}/>} />
      <Route exact path='/parade/gallery' render={(props) => <Container {...props} page={Gallery}/>} />
      <Route exact path='/parade/register' render={(props) => <Container {...props} page={Register}/>} />
      <Route exact path='/parade/mckay' render={(props) => <Container {...props} page={McKay}/>} />
      {/* Workshops */}
      <Route exact path='/workshops' render={(props) => <Container {...props} page={Workshops}/>} />
      <Route exact path='/workshops/luminary-lantern-workshops' render={(props) => <Container {...props} page={LuminaryLantern}/>} />
      <Route exact path='/workshops/large-luminary-workshop' render={(props) => <Container {...props} page={LargeLuminary}/>} />
      <Route exact path='/workshops/teach-a-workshop' render={(props) => <Container {...props} page={TeachWorkshop}/>} />
      {/* Get Involved */}
      <Route exact path='/artists' render={(props) => <Container {...props} page={Artists}/>} />
      <Route exact path='/membership' render={(props) => <Container {...props} page={Membership}/>} />
      <Route exact path='/donate' render={(props) => <Container {...props} page={Donate}/>} />
      <Route exact path='/volunteer' render={(props) => <Container {...props} page={Volunteer}/>} />
      <Route exact path='/sponsor-us' render={(props) => <Container {...props} page={SponsorUs}/>} />
      <Route exact path='/community-meetings' render={(props) => <Container {...props} page={Meetings}/>} />
      {/* Misc */}
      <Route exact path='/faq' render={(props) => <Container {...props} page={FAQ}/>} />
      <Route exact path='/photography' render={(props) => <Container {...props} page={Photography}/>} />
      <Route exact path='/test' render={(props) => <Container {...props} page={Test}/>} />
    </HashRouter>
  );
}

export default App;
