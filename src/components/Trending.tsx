import React from 'react';
import { useAppContext } from '../Helper/Context';
import Hero from './Hero';

const Trending = () => {
  const context = useAppContext();
  const { videos } = context;

  // Filter trending videos (example: videos with > 400K views)
  const trendingVideos = videos.filter(video => video.views > "400K");

  return (
    <Hero title="Trending" videos={ trendingVideos} />
  );
};

export default Trending;