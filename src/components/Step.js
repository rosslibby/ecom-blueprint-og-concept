import React from "react";

const Step = ({ i, j, completeStep, expandStep, step, update, expand }) => {
  return (
    <li key={`step_${i}-${j}`} className="level__step">
      <span className="step__row">
        <span
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <span style={{ width: "100%", display: "flex" }}>
            {/* <span onClick={() => update(i, j, completeStep)}>
              {step.completed ? (
                <span>
                  <i
                    className="fas fa-check-square"
                    style={{ color: "#88c228" }}
                  />
                  &nbsp;
                </span>
              ) : (
                <span>
                  <i className="fas fa-square" style={{ color: "#cccccc" }} />
                  &nbsp;
                </span>
              )}
            </span> */}
            <span
              onClick={() => expand(i, j, expandStep)}
              style={{
                textDecoration: step.completed ? "line-through" : "none",
                display: "flex",
                width: "100%"
              }}
            >
              {step.text}
            </span>
          </span>
          {step.description ? (
            <span>
              {step.expanded ? (
                <span
                  className="step__description"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              ) : null}
            </span>
          ) : null}
        </span>
        <span onClick={() => expand(i, j, expandStep)}>
          {step.expanded ? (
            <span>
              <i className="fas fa-minus-circle" style={{ color: "#4e4e4e" }} />
            </span>
          ) : (
            <span>
              <i className="fas fa-plus-circle" style={{ color: "#4e4e4e" }} />
            </span>
          )}
        </span>
      </span>
    </li>
  );
};

export default Step;
