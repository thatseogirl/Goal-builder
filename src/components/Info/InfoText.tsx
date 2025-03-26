import { type ReactNode } from "react";

type HintProp = {
  mode: "hint";
  children: ReactNode;
};
type WarningProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type infoTextProps = HintProp | WarningProps;

const InfoText = (props: infoTextProps) => {
  const { mode, children } = props;
  if (mode === "hint") {
    return <aside className={"infobox infobox-hint"}>{children}</aside>;
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>warning</h2>
      {children}
    </aside>
  );
};

export default InfoText;
