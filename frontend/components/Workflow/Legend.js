import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";

import StyledTooltip from "../tooltip";

const Legend = ({ direction }) => {
  const styles = {
    height: "100%",
    border: "1px solid lightgray",
  };

  const individualStyle = {
    margin: "12px 8px",
  };

  const tooltipInfo = {
    external:
      "The external node represents the content that was used within the paper, but not generated within the paper.",
    dataset:
      "The dataset node represents data generated by either a Tool or Script node(s)",
    script:
      "The script node represents the user defined procedures utilized in the paper. (e.g. to analyze or post process the data belonging to datasets)",
    tool:
      "The tool node represents an instrument (either software or experimental set up) utilized in the paper",
    chart:
      "The chart node represents a figure or a table and is typically considered an end-point within a workflow",
  };

  return (
    <Grid
      container
      direction={direction}
      justify="center"
      alignItems="center"
      style={styles}
    >
      <Grid item>
        <Typography
          variant="h4"
          style={{ color: "#357EBD", ...individualStyle }}
        >
          Nodes
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={individualStyle}
      >
        <StyledTooltip title={tooltipInfo.external} arrow>
          <div className="external"></div>
        </StyledTooltip>
        <Typography align="center">External</Typography>
      </Grid>
      <Grid item style={individualStyle}>
        <StyledTooltip title={tooltipInfo.dataset} arrow>
          <div className="dataset"></div>
        </StyledTooltip>
        <Typography align="center">Dataset</Typography>
      </Grid>
      <Grid item style={individualStyle}>
        <StyledTooltip title={tooltipInfo.script} arrow>
          <div className="script"></div>
        </StyledTooltip>
        <Typography align="center">Script</Typography>
      </Grid>
      <Grid item style={individualStyle}>
        <StyledTooltip title={tooltipInfo.tool} arrow>
          <div className="tool"></div>
        </StyledTooltip>
        <Typography align="center">Tool</Typography>
      </Grid>
      <Grid item style={individualStyle}>
        <StyledTooltip title={tooltipInfo.chart} arrow>
          <div className="chart"></div>
        </StyledTooltip>
        <Typography align="center">Chart</Typography>
      </Grid>
      <style jsx>
        {`
          .external {
            width: 24px;
            height: 24px;
            background: red;
            border-radius: 50%;
          }
          .dataset {
            width: 64px;
            height: 64px;
            background: gray;
            border-radius: 50%;
          }
          .chart {
            width: 64px;
            height: 64px;
            background: orange;
          }
          .script {
            width: 0;
            height: 0;
            border-left: 32px solid transparent;
            border-right: 32px solid transparent;
            border-bottom: 64px solid green;
          }
          .tool {
            width: 0;
            height: 0;
            border: 32px solid transparent;
            border-bottom-color: blue;
            position: relative;
            top: -32px;
          }
          .tool:after {
            content: "";
            position: absolute;
            left: -32px;
            top: 32px;
            width: 0;
            height: 0;
            border: 32px solid transparent;
            border-top-color: blue;
          }
        `}
      </style>
    </Grid>
  );
};

Legend.defaultProps = {
  direction: "column",
};

Legend.propTypes = {
  direction: PropTypes.string,
};

export default Legend;
