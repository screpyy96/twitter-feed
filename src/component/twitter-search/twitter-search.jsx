import React from "react";
import { Timeline } from "react-twitter-widgets";
import SmartForm from "../smart-form/smart-form";

const TwittweSearch = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "hubble_space",
        }}
        options={{
          tweetLimit: "10",
        }}
      />
      <SmartForm />
    </div>
  );
};

export default TwittweSearch;
