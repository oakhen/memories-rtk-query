import classNames from "classnames"

const Skeleton = ({ times }) => {
  const boxes = Array.from({ length: times }).map((_, i) => (
    <div
      style={{
        marginTop: "10px",
      }}
      className="animate-pulse bg-gray-300  p-6"
      key={i}
    >
      {/* <Loader /> */}
    </div>
  ))
  return boxes
}
export default Skeleton

const Loader = () => {
  return (
    <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
      <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
        <div className="w-12 bg-gray-300 h-7 rounded-full"></div>
        <div className="flex flex-col space-y-3">
          <div className="w-36 bg-gray-300 h-6 rounded-md"></div>
          <div className="w-24 bg-gray-300 h-6 rounded-md"></div>
        </div>
      </div>
    </div>
  )
}
