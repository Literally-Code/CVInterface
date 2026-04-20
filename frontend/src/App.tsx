import ObjectLocator from "./components/ObjectLocator"
import Terminal from "./components/Terminal"

const App = () => {
  
  return (
    <div className="flex flex-row bg-background min-w-screen min-h-screen">
      {/* Terminal and realsense nav button */}
      <div className="flex flex-1 flex-col justify-between">
        <Terminal />
        <div className="flex flex-1 grow justify-center items-center">
          <button className="bg-white text-black font-bold hover:bg-green-300 hover:cursor-pointer rounded-md p-16">Go to RealSense</button>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="relative top-8 left-8">
          <ObjectLocator></ObjectLocator>
        </div>
      </div>
    </div>
  )
}

export default App
