import { createContext, useContext, useState } from "react";
import type { PropsWithChildren, Dispatch } from "react";
export type State = "open" | "closed";
type Context = {
  state: State;
  setState?: Dispatch<State>;
};
const context = createContext<Context>({
  state: "closed",
});
export function SideMenuProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<State>("closed");
  return (
    <context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </context.Provider>
  );
}
export function useToggleValue() {
  const ctx = useContext(context);
  if (!ctx) throw new Error("Context inaccessible");
  return ctx.state;
}
export function useToggleChange() {
  const ctx = useContext(context);
  if (!ctx) throw new Error("Context inaccessible");
  if (!ctx.setState) throw new Error("Dispath funtion not found");
  const { setState, state } = ctx;
  return (value?: State) => {
    if (value) {
      setState(value);
      return;
    }
    state === "closed" ? setState("open") : setState("closed");
  };
}
