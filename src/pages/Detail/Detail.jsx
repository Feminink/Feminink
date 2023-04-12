import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailComponent from "../../components/DetailComponent/DetailComponent";
import { getDetail } from "../../store/gallery/actions";

const DetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, []);

  return <DetailComponent></DetailComponent>;
};

export default DetailPage;
