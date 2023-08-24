import { CSSProperties } from "react";
import { FormItems, PlanPrices } from "../../App";

type StepProps = FormItems & {
  updateForm: (fieldsToUpdate: any) => void;
};

const labelCheckedStyles: CSSProperties = {
  borderColor: "var(--Marine-blue)",
  backgroundColor: "var(--Magnolia)",
};

const StepThree = ({ isYearlyPlan, addOns, updateForm }: StepProps) => {
  return (
    <section className="content-wrapper add-ons">
      <h1>Pick add-ons</h1>
      <h3>Add-ons help enhance your gaming experience.</h3>

      <label
        style={addOns.onlineService ? labelCheckedStyles : {}}
        className="container"
      >
        <input
          name="online-service"
          type="checkbox"
          checked={addOns.onlineService}
          onChange={(e) => {
            updateForm((addOns.onlineService = e.target.checked));
          }}
        />
        <div className="label-bg"></div>
        <div className="content-container">
          <h4>Online service</h4>
          <p className="card-para">Access to multiplayer games</p>
        </div>
        <p className="pricing">
          {isYearlyPlan
            ? PlanPrices.onlineService.yearly
            : PlanPrices.onlineService.monthly}
        </p>
      </label>

      <label
        style={addOns.largerStorage ? labelCheckedStyles : {}}
        className="container"
      >
        <input
          checked={addOns.largerStorage}
          type="checkbox"
          onChange={(e) => {
            updateForm((addOns.largerStorage = e.target.checked));
          }}
        />
        <div className="label-bg"></div>
        <div className="content-container">
          <h4>Larger storage</h4>
          <p className="card-para">Extra 1TB of cloud save</p>
        </div>
        <p className="pricing">
          {isYearlyPlan
            ? PlanPrices.largerStorage.yearly
            : PlanPrices.largerStorage.monthly}
        </p>
      </label>

      <label
        style={addOns.customizableProfile ? labelCheckedStyles : {}}
        className="container"
      >
        <input
          checked={addOns.customizableProfile}
          type="checkbox"
          onChange={(e) => {
            updateForm((addOns.customizableProfile = e.target.checked));
          }}
        />
        <div className="label-bg"></div>
        <div className="content-container">
          <h4>Customizable Profile</h4>
          <p className="card-para">Custom theme on your profile</p>
        </div>
        <p className="pricing">
          {isYearlyPlan
            ? PlanPrices.customizableProfile.yearly
            : PlanPrices.customizableProfile.monthly}
        </p>
      </label>
    </section>
  );
};

export default StepThree;
