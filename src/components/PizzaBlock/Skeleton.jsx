import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block pizza-block-skeleton"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="128" r="125" />
    <circle cx="173" cy="205" r="11" />
    <rect x="1" y="302" rx="8" ry="8" width="280" height="90" />
    <rect x="0" y="266" rx="8" ry="8" width="280" height="26" />
    <rect x="0" y="408" rx="8" ry="8" width="90" height="26" />
    <rect x="123" y="398" rx="19" ry="19" width="153" height="46" />
  </ContentLoader>
);

export default Skeleton;
