import React from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm: React.FC = () => {
  const [forms, onChange] = useLogin();

  console.log(forms);

  return (
    <form>
      {forms.map((el) => (
        <React.Fragment key={el.id}>
          <label>{el.label}</label>
          <input type={el.type} onChange={onChange(el.id)} />
          <br />
        </React.Fragment>
      ))}
    </form>
  );
};

export default LoginForm;
