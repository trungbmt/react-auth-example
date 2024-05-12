import "./App.css";
import GetRoutes from "@routes/GetRoutes";

function App() {
  return (
    <>
      <div className="bg-white transition-colors h-full">
        <div className="flex flex-col flex-auto h-full min-h-0">
          <div className="">
            <GetRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
