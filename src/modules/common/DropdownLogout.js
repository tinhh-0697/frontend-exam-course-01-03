import React from 'react';

export const DropdownLogout = (props) => {
  const { handerLogout } = props;
  return (
    <div className="header-wrap-logout">
      <h5>Hello, Katie Reed</h5>
      <button className="btn btn-danger" onClick={handerLogout}>
        Logout
      </button>
    </div>
  );
};
