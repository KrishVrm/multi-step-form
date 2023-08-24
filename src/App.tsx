import "./styles/App.css";
import useMultiForm from "./hooks/useMultiForm";
import { FormEvent, useState } from "react";
import SideNav from "./components/SideNav";
import StepOne from "./components/formSteps/StepOne";
import StepTwo from "./components/formSteps/StepTwo";
import StepThree from "./components/formSteps/StepThree";
import StepFour from "./components/formSteps/StepFour";

type PlanPrice = {
  monthly: string;
  yearly: string;
};

type PlanPriceMap = {
  [key: string]: PlanPrice;
};

export const PlanPrices: PlanPriceMap = {
  arcade: {
    monthly: "$9/mo",
    yearly: "$90/yr",
  },
  advanced: {
    monthly: "$12/mo",
    yearly: "$120/yr",
  },
  pro: {
    monthly: "$15/mo",
    yearly: "$150/yr",
  },
  onlineService: {
    monthly: "$1/mo",
    yearly: "$10/yr",
  },
  largerStorage: {
    monthly: "$2/mo",
    yearly: "$20/yr",
  },
  customizableProfile: {
    monthly: "$2/mo",
    yearly: "$20/yr",
  },
};

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  isYearlyPlan: boolean;
  addOns: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  isYearlyPlan: false,
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

function App() {
  const [formData, setFormData] = useState(initialValues);

  function updateForm(fieldsToUpdate: Partial<typeof formData>) {
    setFormData({ ...formData, ...fieldsToUpdate });
  }

  const sideNavElements: string[] = [
    "Your Info",
    "Select Plan",
    "Add-Ons",
    "Summary",
  ];

  const {
    currentIndex,
    setCurrentIndex,
    goForwards,
    goBackwards,
    isFirstStep,
    isLastStep,
  } = useMultiForm(formData, sideNavElements);

  return (
    <main className="main-wrapper">
      <SideNav sideNavElements={sideNavElements} currentIndex={currentIndex} />

      <section className="right-content-wrapper">
        {currentIndex === 0 && (
          <StepOne {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 1 && (
          <StepTwo {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 2 && (
          <StepThree {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 3 && (
          <StepFour {...formData} setCurrentIndex={setCurrentIndex} />
        )}

        <div className="button-container">
          <button
            style={{ visibility: !isFirstStep ? "visible" : "hidden" }}
            onClick={goBackwards}
            className="secondary-btn"
          >
            Go Back
          </button>

          <button
            onClick={goForwards}
            className="primary-btn"
            style={{
              background: isLastStep
                ? "var(--Purplish-blue)"
                : "var(--Marine-blue",
            }}
          >
            {isLastStep ? "Confirm" : "Next Step"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
