import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRequest } from "../redux/actions/registryActions";
import { Request } from "../components";

const RequestContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isGetRequest, request } = useSelector(({ registry }) => registry);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    dispatch(getRequest(id));
  }, []);
  return (
    <Request {...request} isGetRequest={isGetRequest} role={role} id={id} />
  );
};

export default RequestContainer;
