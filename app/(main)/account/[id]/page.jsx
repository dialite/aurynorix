import React from "react";

const AccountsPage = async ({ params }) => {
  const { id } = await params;

  return <div>{id}</div>;
};

export default AccountsPage;
