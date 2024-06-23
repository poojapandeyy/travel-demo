import Domesticinclusion from "../../components/DomesticInclusion/Domesticinclusion";
import Domesticintro from "../../components/DomesticIntro/Domesticintro";
import Domesticbanner from "../../components/Domesticbanner/Domesticbanner";
import Departure from "../../components/Domesticdeparture/Departure";
import Domesticfaqs from "../../components/Domesticfaqs/Domesticfaqs";
import Domesticicons from "../../components/Domesticicons/Domesticicons";
import Domesticitinerary from "../../components/Domesticitienary/Domesticitinerary";
import Domesticreview from "../../components/Domesticreview/Domesticreview";
import Domesticnavbar from "../../components/domesticnavbar/domesticnavbar";

const Detail = () => {
  return (
    <div className="relative">
      <Domesticnavbar />
      <Domesticbanner />
      <Domesticicons />
      <Domesticintro />
      <Domesticitinerary />
      <Domesticinclusion />
      <Departure />
      <Domesticfaqs />
      <Domesticreview />
    </div>
  );
};

export default Detail;
