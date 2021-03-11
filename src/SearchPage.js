import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneoutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneoutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Assistant_logo.png/601px-Google_Assistant_logo.png"
        channel="Google Channel"
        verified
        subs="600k"
        noOfVideos={300}
        description="Hello Google"
      />
      <hr />

      <VideoRow
        views="3M"
        subs="120k"
        description="WellCome to Google"
        timestamp="30 seconds ago"
        channel="Google Channel"
        title="Let's build React app"
        image="https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg"
      />

      <VideoRow
        views="3M"
        subs="120k"
        description="WellCome to Google"
        timestamp="30 seconds ago"
        channel="Google Channel"
        title="Let's build React app"
        image="https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg"
      />

      <VideoRow
        views="3M"
        subs="120k"
        description="WellCome to Google"
        timestamp="30 seconds ago"
        channel="Google Channel"
        title="Let's build React app"
        image="https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg"
      />
    </div>
  );
}

export default SearchPage;
