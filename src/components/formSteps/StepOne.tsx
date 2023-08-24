import { FormItems } from "../../App";

type StepProps = FormItems & {
  updateForm: (fieldsToUpdate: Partial<FormItems>) => void;
};

const StepOne = ({ name, email, phone, updateForm }: StepProps) => {
  // Email & Phone Validation
  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegEx = /^[0-9]+$/;

  return (
    <form className="content-wrapper">
      <h1>Personal info</h1>
      <h3>Please provide your name, email address, and phone number.</h3>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={(e) => {
          updateForm({ name: e.target.value });
        }}
        value={name}
        name="name"
        placeholder="e.g. Stephen King"
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={(e) => {
          updateForm({ email: e.target.value });
        }}
        value={email}
        autoComplete="email"
        placeholder="e.g. stephen@gmail"
        // style={{
        //   border: !emailRegEx.test(email) ? "2px solid red" : "",
        // }}
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        onChange={(e) => {
          updateForm({ phone: e.target.value });
        }}
        value={phone}
        placeholder="e.g. +1 234 567 890"
      />
    </form>
  );
};

export default StepOne;
