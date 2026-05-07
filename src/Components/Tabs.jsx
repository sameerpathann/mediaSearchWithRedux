import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../Redux/Slices/searchSlice";

const Tabs = () => {
  const Tabs = ["Photos", "Videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex items-center gap-5">
      {Tabs.map((tab, idx) => {
        return (
          <button
            className={`${activeTab === tab ? "bg-blue-700" : "bg-gray-500"} md:py-2 md:px-3 transition-colors duration-75  rounded uppercase active:scale-95 cursor-pointer md:text-xl md:font-semibold`}
            onClick={() => {
              dispatch(setActiveTab(tab));
            }}
            key={idx}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
