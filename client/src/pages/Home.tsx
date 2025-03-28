import React from 'react';
import About from '../components/About';
// import Clients from '../components/Clients';
import Introduction from '../components/Introduction';
import Operations from '../components/Operations';
import Service from '../components/Service';
import Support from '../components/Support';
// import Testimonies from '../components/Testimonies';
import Bridge from '../components/Bridge';

const Home: React.FC = () => {
  return (
    <div>
      <Introduction />
      <Bridge />
      <About />
      <Operations />
      <Service />
      {/* <Clients /> */}
      {/* <Testimonies /> */}
      <Support />
    </div>
  );
};

export default Home;
