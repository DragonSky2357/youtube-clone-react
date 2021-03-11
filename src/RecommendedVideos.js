import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>RecommendedVideos </h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Hello World"
          views="2M Views"
          timestamp="3 days ago"
          channelImage="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
          channel="Google"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg"
        />
        <VideoCard
          title="Hello World"
          views="2M Views"
          timestamp="3 days ago"
          channelImage="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
          channel="Google"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg"
        />
        <VideoCard
          title="Hello World"
          views="2M Views"
          timestamp="3 days ago"
          channelImage="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
          channel="Google"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg"
        />
        <VideoCard
          title="Hello World"
          views="2M Views"
          timestamp="3 days ago"
          channelImage="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
          channel="Google"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg"
        />
        <VideoCard
          title="Hello World"
          views="2M Views"
          timestamp="3 days ago"
          channelImage="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
          channel="Google"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg"
        />
        <VideoCard
          title="Hello World"
          views="2M Views"
          timestamp="3 days ago"
          channelImage="https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
          channel="Google"
          image="https://ichef.bbci.co.uk/news/640/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
