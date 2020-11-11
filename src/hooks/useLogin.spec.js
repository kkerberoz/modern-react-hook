import { useLogin } from "./useLogin";

describe("useLogin Tests", () => {
  const mockInit = [{ id: "1", label: "username", value: "", type: "text" }];
  const expectedInit = [
    { id: "1", label: "username", value: "", type: "text" },
  ];

  it("Should be accpeted a init value", () => {
    const [forms] = useLogin(mockInit);

    expect(forms).toEqual(expectedInit);
  });

  it("Should change a value after onChange called", () => {
    const [forms, onChange] = useLogin(mockInit);
    onChange("1")({
      target: {
        value: "test",
      },
    });
    const expectedFormValue = [
      { id: "1", label: "username", value: "test", type: "text" },
    ];
    expect(forms.find((el) => el.id === "1")).toEqual(expectedFormValue);
  });
});
