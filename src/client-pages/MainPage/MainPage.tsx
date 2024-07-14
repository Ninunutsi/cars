import LocationDetails from "@/components/CarRentTimeDetails/LocationDetails";
import CarsList from "@/components/CarsList";
import FAQMain from "@/components/FAQ/FAQMain";
import SendAQuestion from "@/components/SendAQuestion";
import Slider from "@/components/Slider";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <LocationDetails />
      <Slider />
      <CarsList />

      <FAQMain />
      <SendAQuestion />
    </div>
  );
};

export default MainPage;
