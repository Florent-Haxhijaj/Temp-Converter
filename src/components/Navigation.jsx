import { Link, NavLink } from 'react-router-dom';
import { Button } from '../styled/Button';
import { NavigationBar } from '../styled/NavigationBar';
const Navigation = () => {
  const styleLink = {};
  return (
    <NavigationBar>
      <div className="main">
        <div className="container">
          <h2>Flori-Dev</h2>
          <hr></hr>
        </div>
        <div className="menu">
          <NavLink
            to={'/'}
            style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                    background: 'rgb(94 38 200)',
                    textDecoration: 'none',
                    margin: '20px',
                    padding: '10px',
                    width: '250px',
                    borderRadius: '5px',
                  }
                : {
                    margin: '20px',
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'white',
                    background: 'none',
                    width: '250px',
                    background: 'none',
                  }
            }
          >
            Average
          </NavLink>
        </div>
        <div className="menu">
          <NavLink
            to={'/Temperature'}
            style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                    background: 'rgb(94 38 200)',
                    textDecoration: 'none',
                    margin: '20px',
                    padding: '10px',
                    width: '250px',
                    borderRadius: '5px',
                  }
                : {
                    margin: '20px',
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'white',
                    background: 'none',
                    width: '250px',
                    background: 'none',
                  }
            }
          >
            Temperature
          </NavLink>
        </div>
        <div className="menu">
          <NavLink
            to={'/Velocity'}
            style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                    background: 'rgb(94 38 200)',
                    textDecoration: 'none',
                    margin: '20px',
                    padding: '10px',
                    width: '250px',
                    borderRadius: '5px',
                  }
                : {
                    margin: '20px',
                    padding: '10px',
                    textDecoration: 'none',
                    color: 'white',
                    background: '10px',
                    width: '500px',
                    background: 'none',
                  }
            }
          >
            Velocity
          </NavLink>
        </div>
        <div className="logout">
          <Button>Logout</Button>
        </div>
      </div>
    </NavigationBar>
  );
};

export default Navigation;
