import { useState } from "react";

type LoginForm = {
  id: string;
  label: string;
  value: string;
  type: "text" | "password";
};

type LoginState = LoginForm[];
type HandleHTMLOnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type OnChange = (id: LoginForm["id"]) => HandleHTMLOnChange;
type UseLogin = [LoginState, OnChange];

const initForm: LoginForm[] = [
  { id: "1", label: "username", value: "", type: "text" },
  { id: "2", label: "password", value: "", type: "password" },
];

function useLogin(init?: LoginForm[]): UseLogin {
  const [forms, setForms] = useState<LoginForm[]>(init || initForm);

  return [
    forms,
    (id) => {
      // fire from custom handler
      return (e) => {
        // fire from dom
        const value = e.target.value;
        setForms((prev) =>
          prev.map((el) => {
            const isChanged = el.id === id;
            if (isChanged) return { ...el, value };
            return el;
          })
        );
      };
    },
  ];
}

export { useLogin };
