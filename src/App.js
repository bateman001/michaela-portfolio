import React, {useState} from 'react';
import './main.css';
import Intro from './routes/Intro';
import Contact from './routes/Contact';
import PortfolioRoute from './routes/PortfolioRoute';
import {IoIosMenu} from 'react-icons/io';
import {useTrail, animated} from 'react-spring';
import {Route, Switch, Link} from 'react-router-dom';
import PortfolioOptions from './routes/PortfolioOptions';

const App = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="App">
        <IoIosMenu onClick={() => setClicked(!clicked)} className='menu-icon'/>
        {clicked && <Menu clicked={clicked} setClicked={setClicked}/>}
      
    <Switch>
      <Route exact path='/' children={(rProps) => <Intro {...rProps}/>}/>
      <Route exact path='/portfolio' children={(rProps) => <PortfolioOptions {...rProps}/>}/>
      <Route exact path='/portfolio/:id' children={(rProps) => <PortfolioRoute id={rProps.match.params.id}/>}/>
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
      route: '/portfolio'
    },
    {
      name: 'Contact',
      route: '/contact'
    } 
  ]

  const transition = useTrail(list.length, {
    from: {opacity: 0},
    to: {opacity: 1},
  })

  return (
    <ul className='menu-nav'>
      {transition.map((animation, index) =>
        <Link to={list[index].route}>
        <animated.li 
          key={index}
          style={animation}
          className='menu-list-item'
          onClick={() => props.setClicked(false)}
          >
            {list[index].name}
        </animated.li>
        </Link>
      )}
    </ul>
  )
}

export default App;
