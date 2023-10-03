interface TabSwitcherProps {
  activeTab: "tasks" | "notes";
  handleTabClick: (tab: "tasks" | "notes") => void;
  activeColor: string;
}

const TabSwitcher = ({
  activeTab,
  handleTabClick,
  activeColor,
}: TabSwitcherProps) => {
  const btnsStyle = "px-4 py-2 focus:outline-none opacity-90 hover:opacity-100";

  return (
    <div className="flex items-center">
      <button
        className={`${btnsStyle} rounded-s-md`}
        style={{
          backgroundColor:
            activeTab === "tasks" ? `${activeColor} ` : "#1E2022",

          color: activeTab === "tasks" ? "aliceblue" : "gray",
        }}
        onClick={() => handleTabClick("tasks")}
      >
        Tasks
      </button>
      <button
        className={`${btnsStyle} rounded-e-md`}
        style={{
          backgroundColor:
            activeTab === "notes" ? `${activeColor} ` : "#1E2022",
          color: activeTab === "notes" ? "aliceblue" : "gray",
        }}
        onClick={() => handleTabClick("notes")}
      >
        Notes
      </button>
    </div>
  );
};

export default TabSwitcher;
