import { Fragment } from "react";
import PropTypes from "prop-types";

import { Typography, Box } from "@material-ui/core";
import LabelValue from "../labelvalue";
import Tag from "../tag";

const ReferenceInfo = ({ referenceData }) => {
  const {
    title,
    authors,
    tags,
    collections,
    PIs,
    publication,
    year,
    doi,
    cite,
    downloadPath,
    notebookFile,
    notebookPath,
    abstract,
  } = referenceData;

  const notebook = notebookFile
    ? "https://nbviewer.jupyter.org/url/" +
      notebookPath.replace("https://", "") +
      "/" +
      notebookFile
    : false;

  const mint = {};

  return (
    <Fragment>
      <Box my={1}>
        <Typography variant="h4" gutterBottom>
          <Box fontWeight="bold">{title}</Box>
        </Typography>
        <Typography variant="subtitle1" color="secondary" gutterBottom>
          by {authors}
        </Typography>
      </Box>
      <Box>
        {tags.map((tag) => (
          <Tag label={tag} key={tag} />
        ))}
      </Box>
      <Box my={2}>
        <LabelValue label="Collection(s)" value={collections} />
        <LabelValue label="Principal Investigators" value={PIs} />
        <LabelValue
          label="Published In"
          value={publication + " (" + year + ")"}
          link={"https://doi.org/" + doi}
        />
        <LabelValue label="Cite" value={cite.length > 0 ? cite : ""} />
        <LabelValue
          label="Download"
          value="Download data associated to the paper Using Globus"
          link={downloadPath}
          image="/images/download-icon.png"
        />
        {notebook ? (
          <LabelValue
            label="Notebook"
            value="View the JupyterNotebook associated to the Paper"
            link={notebook}
            image="/images/jupyter-icon.png"
          />
        ) : null}
        <LabelValue label="Abstract" value={abstract} />
      </Box>
    </Fragment>
  );
};

ReferenceInfo.propTypes = {
  referenceData: PropTypes.object.isRequired,
};

export default ReferenceInfo;