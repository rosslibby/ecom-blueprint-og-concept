import { completeStep, expandStep, getSteps } from "../actions";
import steps from "../steps";

const initialState = {
  steps,
  points: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STEPS":
      return Object.assign({}, state, {
        ...state,
        steps
      });
    case "COMPLETE_STEP":
      return Object.assign({}, state, {
        ...state,
        points:
          state.steps[action.level] !== undefined
            ? state.steps[action.level].steps[action.step].completed
              ? --state.points
              : ++state.points
            : state.points,
        steps: state.steps.map((level, i) =>
          i === action.level
            ? {
                ...level,
                steps: level.steps.map((step, j) =>
                  j === action.step
                    ? {
                        ...step,
                        completed: !step.completed
                      }
                    : step
                )
              }
            : level
        )
      });
    case "EXPAND_STEP":
      return Object.assign({}, state, {
        ...state,
        steps: state.steps.map((level, i) =>
          i === action.level
            ? {
                ...level,
                steps: level.steps.map((step, j) =>
                  j === action.step
                    ? {
                        ...step,
                        expanded: !step.expanded
                      }
                    : step
                )
              }
            : level
        )
      });
    default:
      return Object.assign({}, state, {
        ...state,
        steps: state.steps.map((step, i) =>
          i === action.step
            ? {
                ...step,
                deleted: false
              }
            : step
        )
      });
  }
};

export default rootReducer;
