import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";

const CustomPagination = ({ setPage, totalPage }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Pagination
        count={totalPage}
        color="primary"
        onChange={handlePageChange}
      />
    </div>
  );
};

CustomPagination.propTypes = {
  setPage: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
};

export default CustomPagination;