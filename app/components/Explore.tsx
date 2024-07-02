import React from "react";
import ExplorCard from "./ExplorCard ";
import { getExplore } from "../utils/api";
import { ExploreData } from "../types/app";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();

  return (
    <section className="pt-6">
      <div className="container">
        <h2 className="text-4xl font-semibold mb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item) => (
            <ExplorCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
