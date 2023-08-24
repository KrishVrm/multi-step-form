import { CSSProperties } from "react";

const SideBar = ({
  sideNavElements,
  currentIndex,
}: {
  sideNavElements: Array<string>;
  currentIndex: number;
}) => {
  const tabVisitedStyles: CSSProperties = {
    background: "var(--Light-blue)",
    color: "var(--Marine-blue)",
    border: "2px solid var(--Pastel-blue)",
  };
  return (
    <aside className="bg-sidebar">
      {sideNavElements.map((navLinkName: string, index: number) => {
        return (
          <div className="sidebar-button-container">
            <div
              style={currentIndex === index ? tabVisitedStyles : {}}
              className="tab-btn"
            >
              {index + 1}
            </div>
            <div>
              <h6>STEP {index + 1}</h6>
              <h5>{navLinkName}</h5>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default SideBar;
