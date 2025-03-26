
import InfoText from "./InfoText";

type goalCountProp = {
  goalCount: number;
};

const GoalInfo = ({ goalCount }: goalCountProp) => {
  console.log(goalCount);
  if (goalCount === 0) {
    return (
      <InfoText mode="hint">
        You have no course goals, Start learning today.
      </InfoText>
    );
  }

  return (
    goalCount >= 3 && (
      <InfoText mode="warning" severity="medium">
        Too much goals leads to procastination
      </InfoText>
    )
  );
};

export default GoalInfo;
