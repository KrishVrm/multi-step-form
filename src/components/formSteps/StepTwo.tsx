import { CSSProperties } from "react";
import { FormItems, PlanPrices } from "../../App";

type StepProps = FormItems & {
  updateForm: (fieldsToUpdate: Partial<FormItems>) => void;
};
const StepTwo = ({ plan, isYearlyPlan, updateForm }: StepProps) => {
  const labelCheckedStyles: CSSProperties = {
    borderColor: "var(--Marine-blue)",
    backgroundColor: "var(--Magnolia)",
  };
  return (
    <section className="content-wrapper">
      <h1>Select your plan</h1>
      <h3>You have the option of monthly or yearly billing.</h3>

      <div className="cards-container">
        <label
          className="container"
          style={plan === "arcade" ? labelCheckedStyles : {}}
        >
          <div className="label-bg" id="arcade"></div>
          Arcade
          <p className="pricing">
            {isYearlyPlan
              ? PlanPrices.arcade.yearly
              : PlanPrices.arcade.monthly}
          </p>
          {isYearlyPlan ? "2 months free!" : ""}
          <input
            name="arcade"
            type="checkbox"
            checked={plan === "arcade"}
            onChange={() => updateForm({ plan: "arcade" })}
          />
        </label>

        <label
          style={plan === "advanced" ? labelCheckedStyles : {}}
          className="container"
        >
          <div className="label-bg" id="advanced"></div>
          Advanced
          <p className="pricing">
            {isYearlyPlan
              ? PlanPrices.advanced.yearly
              : PlanPrices.advanced.monthly}
          </p>
          {isYearlyPlan ? "2 months free!" : ""}
          <input
            name="advanced"
            checked={plan === "advanced"}
            onChange={() => updateForm({ plan: "advanced" })}
            type="checkbox"
          />
          <span className="checkmark"></span>
        </label>

        <label
          style={plan === "pro" ? labelCheckedStyles : {}}
          className="container"
        >
          <div className="label-bg" id="pro"></div>
          Pro
          <p className="pricing">
            {isYearlyPlan ? PlanPrices.pro.yearly : PlanPrices.pro.monthly}
          </p>
          {isYearlyPlan ? "2 months free!" : ""}
          <input
            name="pro"
            checked={plan === "pro"}
            onChange={() => updateForm({ plan: "pro" })}
            type="checkbox"
          />
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="switch-container">
        <h3
          style={{ color: !isYearlyPlan ? "var(--Marine-blue)" : "" }}
          id="monthly"
        >
          Monthly
        </h3>
        <label className="switch" style={{ top: "-8px" }}>
          <input
            type="checkbox"
            checked={isYearlyPlan}
            onChange={(e) => updateForm({ isYearlyPlan: e.target.checked })}
          />
          <span className="slider round"></span>
        </label>
        <h3
          style={{ color: isYearlyPlan ? "var(--Marine-blue)" : "" }}
          id="yearly"
        >
          Yearly
        </h3>
      </div>
    </section>
  );
};

export default StepTwo;
