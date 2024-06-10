import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import UserReview from "../UserReview/UserReview";
import AdvertiseSection from "../AdvertiseSection/AdvertiseSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Property | Your Perfect Place Awaits</title>
      </Helmet>
      <Banner />
      <AdvertiseSection />
      <UserReview />
    </div>
  );
};

export default Home;
