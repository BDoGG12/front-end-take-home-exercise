import {Fragment} from 'react';
import {Nav} from 'react-bootstrap';
import './Home.module.css';

const Home = () => {

  return (
    <Fragment>
      <h3>Welcome To Fetch Rewards!</h3>
      <p>Want to win reward points on shopping on your favorite brands?</p>
      <p>Sign up <a href='/sign-up'>here</a>!</p>
    </Fragment>
  );
};

export default Home;