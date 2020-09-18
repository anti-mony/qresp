import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { SwitchTransition, Transition } from "react-transition-group";

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>
    {(state) => (
      <Fragment>
        <div>{children}</div>
        <style jsx>{`
          div {
            margin: 8px 0px;
            transition: 0.1s;
            opacity: ${state === "entered" ? 1 : 0};
            display: ${state === "exited" ? "none" : "block"};
          }
        `}</style>
      </Fragment>
    )}
  </Transition>
);

const SwitchFade = ({ editing, form, display }) => (
  <SwitchTransition mode="out-in">
    <FadeTransition key={editing ? "form" : "display"} timeout={100}>
      {editing ? form : display}
    </FadeTransition>
  </SwitchTransition>
);

SwitchFade.propTypes = {
  editing: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  display: PropTypes.object.isRequired,
};

export default SwitchFade;