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
  return (
    <div className="flex items-center">
      <button
        className="px-4 py-2 focus:outline-none"
        style={{
          backgroundColor:
            activeTab === "tasks" ? `${activeColor} ` : "#f3f4f6",
          color: activeTab === "tasks" ? "#1f2937" : "#9ca3af",
        }}
        onClick={() => handleTabClick("tasks")}
      >
        Tasks
      </button>
      <button
        className="px-4 py-2 focus:outline-none"
        style={{
          backgroundColor:
            activeTab === "notes" ? `${activeColor} ` : "#f3f4f6",
          color: activeTab === "notes" ? "#1f2937" : "#9ca3af",
        }}
        onClick={() => handleTabClick("notes")}
      >
        Notes
      </button>
    </div>
  );
};

export default TabSwitcher;
