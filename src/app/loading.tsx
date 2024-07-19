// import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex-1 flex justify-center items-center">
      {/* <Spinner /> */}
      <div className="custom-content-marker">
        <div className="custom-content-marker-animate">
          <img src="/assets/map-marker-current.png" />
        </div>
        <img src="/assets/map-marker-current.png" />
      </div>
    </div>
  );
}
