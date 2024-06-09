import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import UserReview from "../UserReview/UserReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Property | Your Perfect Place Awaits</title>
      </Helmet>
      <Banner />
      <UserReview />
    </div>
  );
};

export default Home;
