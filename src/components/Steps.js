import React from "react";
import { connect } from "react-redux";
import { completeStep, expandStep } from "../actions";
import Step from "./Step";

const mapDispatchToProps = dispatch => {
  return {
    completeStep: (level, step) => dispatch(completeStep(level, step)),
    expandStep: (level, step) => dispatch(expandStep(level, step))
  };
};

const mapStateToProps = state => {
  return {
    steps: state.steps
  };
};

const update = (i, j, completeStep) => {
  completeStep(i, j);
};

const expand = (i, j, expandStep) => {
  expandStep(i, j);
};

const ConnectedSteps = ({ addPoint, completeStep, expandStep, steps }) => {
  return (
    <div className="levels">
      {steps.map((level, i) => (
        <div key={`level_${i}`} className="level">
          <h2>{level.title}</h2>
          <ul className="steps">
            {level.steps.map((step, j) => (
              <Step
                key={`step-${i}-${j}`}
                i={i}
                j={j}
                step={step}
                completeStep={completeStep}
                expandStep={expandStep}
                update={update}
                expand={expand}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Steps = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedSteps);
export default Steps;
