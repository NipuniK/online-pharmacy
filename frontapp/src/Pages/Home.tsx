import React from 'react';
import Logo from './Pages/src/Logo1.png';

const Home: React.FC = () => {
  return (
    <>
    <div className="container">
    <div className="container mt-3">
  <img className="img-fluid" src="Logo1.png"   alt="New York" width="800" height="50" > 
  </img>
</div>

</div>
<div className="container pt-5">
  
  <h5>Welcome to Health Mart, your one-stop online pharmacy for all your healthcare needs. At Health Mart, we prioritize your health and convenience. Our easy-to-use platform allows you to quickly check the availability of medicines and book them with just a few clicks. Whether you're looking for prescription medications or over-the-counter products, we ensure that you have access to the best quality medicines. Experience hassle-free, reliable, and efficient service with Health Mart – where health meets convenience.</h5>
  
</div>
<div className="container">
  <h1>My First Bootstrap Page</h1>
  <p>This part is inside a .container class.</p>
  <p>The .container class provides a responsive fixed width container.</p>
  <p>Resize the browser window to see that the container width will change at different breakpoints.</p>
</div>

</>
  );
}

export default Home;
