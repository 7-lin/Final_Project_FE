import React from "react";
import { useIsImgLoaded } from "../../hooks/useIsImgLoaded";

const Thumbnail = ({ productName, thumbnail, lazy }: any) => {
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);
  console.log("상품이름", productName);
  console.log("썸넬주소", thumbnail);
  console.log("LAZY: ", lazy);

  return (
    <>
      <img
        className="image"
        ref={elementRef}
        src={isLoaded ? thumbnail : "/spinner.gif"}
        alt={productName}
      />
    </>
  );
};

export default Thumbnail;
