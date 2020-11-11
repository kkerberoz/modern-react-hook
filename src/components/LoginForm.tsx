import React from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm: React.FC = () => {
  const [forms, onChange] = useLogin();

  console.log(forms);

  return (
    <form>
      {forms.map((el) => (
        <>
          <label>{el.label}</label>
          <input key={el.id} type={el.type} onChange={onChange(el.id)} />
          <br />
        </>
      ))}
    </form>
  );
};

export default LoginForm;
