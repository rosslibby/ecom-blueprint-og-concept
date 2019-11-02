import { COMPLETE_STEP, EXPAND_STEP, GET_MODULES } from "../constants";

export const getSteps = steps => {
  return {
    type: "GET_STEPS",
    steps
  };
};

export const completeStep = (level, step) => {
  console.log(level);
  console.log(step);
  return {
    type: "COMPLETE_STEP",
    level,
    step
  };
};

export const expandStep = (level, step) => {
  return {
    type: "EXPAND_STEP",
    level,
    step
  };
};

export const getModules = modules => {
  return {
    type: GET_MODULES,
    modules
  };
};
