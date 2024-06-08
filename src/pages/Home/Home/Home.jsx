import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Property | Your Perfect Place Awaits</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
