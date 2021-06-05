import React, { useState } from "react";
import { Timeline } from "react-twitter-widgets";
import SmartForm from "../smart-form/smart-form";

const TwittweSearch = () => {
  const [screenName, setScreenName] = useState("hubble_space");
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName,
        }}
        options={{
          tweetLimit: "10",
        }}
      />
      <SmartForm setScreenName={setScreenName} />
    </div>
  );
};

export default TwittweSearch;
