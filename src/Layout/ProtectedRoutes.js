import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";

import routes from "../routes";
// import * as authActions from '../store/actions/auth';

const ProtectedRoutes = () => {
  console.log(routes());
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     await dispatch(authActions.authenticate());
  //   };
  //   checkLogin();
  // }, [dispatch]);

  const routing = useRoutes(routes());

  return <>{routing}</>;
};

export default ProtectedRoutes;
