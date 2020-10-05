import React, {useState} from 'react';
import './main.css';
import Intro from './routes/Intro';
import Contact from './routes/Contact';
import PortfolioRoute from './routes/PortfolioRoute';
import {IoIosMenu} from 'react-icons/io';
import {useTrail, animated} from 'react-spring';
import {Route, Switch, Link} from 'react-router-dom';

const App = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="App">
        <IoIosMenu onClick={() => setClicked(!clicked)} className='menu-icon'/>
        {clicked && <Menu clicked={clicked} setClicked={setClicked}/>}
      
    <Switch>
      <Route exact path='/' children={(rProps) => <Intro {...rProps}/>}/>

      <Route exact path='/portfolio'>
        <PortfolioRoute />
      </Route>
      
      <Route exact path='/contact'>
        <Contact />
      </Route>
    </Switch>
    </div>
  );

}

const Menu = (props) => {
  const list = [
    {
      name: 'Home',
      route: '/'
    }, 
    {
      name: 'Portfolio',
      route: 'portfolio'
    },
    {
      name: 'Contact',
      route: 'contact'
    } 
  ]

  const transition = useTrail(list.length, {
    from: {opacity: 0},
    to: {opacity: 1},
  })

  return (
    <ul className='menu-nav'>
      {transition.map((animation, index) =>
        <animated.li 
          key={index}
          style={animation}
          className='menu-list-item'
          onClick={() => props.setClicked(false)}
          >
          <Link to={list[index].route}>
            {list[index].name}
          </Link>
        </animated.li>
      )}
    </ul>
  )
}

export default App;
