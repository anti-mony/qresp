import PropTypes from "prop-types";

import Drawer from "../drawer";
import LabelValue from "../labelvalue";

import { Box } from "@material-ui/core";

const CuratorInfo = ({ curator }) => {
  const { firstName, middleName, lastName, emailId, affiliation } = curator;
  return (
    <Drawer heading="Curator Information">
      <Box my={1}>
        <LabelValue
          label="Name"
          value={
            firstName.trim() + " " + middleName.trim() + " " + lastName.trim()
          }
        />
        <LabelValue label="Email Address" value={emailId} />
        <LabelValue label="Affiliation" value={affiliation} />
      </Box>
    </Drawer>
  );
};

CuratorInfo.propTypes = {
  curator: PropTypes.object.isRequired,
};

export default CuratorInfo;