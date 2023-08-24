import { PlanPrices, FormItems } from "../../App";

const StepFour = ({ plan, isYearlyPlan, addOns, setCurrentIndex }: any) => {
  // (arcade or advanced or pro) cost
  const SelectedPlanCost = isYearlyPlan
    ? PlanPrices[plan].yearly
    : PlanPrices[plan].monthly;

  return (
    <div className="content-wrapper">
      <h1>Finishing up</h1>
      <h3>Double-check everything looks OK before confirming.</h3>

      <div className="final-container">
        <div className="final-sub-container">
          <div>
            <h2>
              {plan} ({isYearlyPlan ? "yearly" : "monthly"})
            </h2>
            <button onClick={() => setCurrentIndex(1)}>Change</button>
          </div>
          <h2>{SelectedPlanCost}</h2>
        </div>

        <hr />
        {addOns.onlineService && (
          <div className="final-sub-container">
            <h3>Online Service</h3>
            <h3>
              {isYearlyPlan
                ? PlanPrices.onlineService.yearly
                : PlanPrices.onlineService.monthly}
            </h3>
          </div>
        )}

        {addOns.largerStorage && (
          <div className="final-sub-container">
            <h3>Larger Storage</h3>
            <h3>
              {isYearlyPlan
                ? PlanPrices.largerStorage.yearly
                : PlanPrices.largerStorage.monthly}
            </h3>
          </div>
        )}

        {addOns.customizableProfile && (
          <div className="final-sub-container">
            <h3>Customizable Profile</h3>
            <h3>
              {isYearlyPlan
                ? PlanPrices.customizableProfile.yearly
                : PlanPrices.customizableProfile.monthly}
            </h3>
          </div>
        )}
      </div>

      <div className="total-div">
        <h3>Total (per month)</h3>
        <h2>+$12/mo</h2>
      </div>
    </div>
  );
};

export default StepFour;
