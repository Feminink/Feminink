import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailComponent from "../../components/DetailComponent/DetailComponent";
import { getInfo } from "../../store/info/actions";

const DetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    dispatch(getInfo(params.id));
  }, []);
  return <DetailComponent></DetailComponent>;
};

export default DetailPage;
