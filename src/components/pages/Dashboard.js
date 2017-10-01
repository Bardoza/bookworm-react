import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const Dashboard = ({ isConfirmed }) => <div>{!isConfirmed && <ConfirmEmailMessage />}</div>;

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isConfirmed: !!state.user.confirmed
  });

export default connect(mapStateToProps)(Dashboard);
