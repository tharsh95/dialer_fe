import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { formatTime, capitalizeFirstLetter } from "../utils.js";
import { GiDuration } from "react-icons/gi";
import moment from "moment";
import { IoMdTime } from "react-icons/io";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
const CallDetail = ({ setInfo, callDetail }) => {
  const handleBack = () => {
    setInfo(true);
  };
  const det = {
    direction: "inbound",
    from: 10000,
    to: 20000,
    via: 3000000,
    duration: 1,
    is_archived: false,
    call_type: "answered",
    id: "6393bb7b69073dc45849ca7c",
    created_at: "2022-12-09T22:49:31.911Z",
  };
  return (
    <div className="calldetail">
      <div className="calldetailcontainer">
      <div className="left">
        <Tooltip title={"Back"}>
          <IconButton onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="center">Call Details</div>
      </div>
      <div className="calldetailitem"
      >
        <div
          className="calldetaildesc"
        >
         <span>Type</span> {capitalizeFirstLetter(callDetail.direction)}
        </div>
        <div
          className="calldetaildesc"
        >
         <span>To</span> {callDetail.to}
        </div>
        <div
        className="calldetaildesc"
        >
          <span>From</span>{callDetail.from}
        </div>
        <div
        className="calldetaildesc"
        >
          <span>Via</span>{callDetail.via}
        </div>
        <div
        className="calldetaildesc"
        >
          <span>Archived</span>{callDetail.is_archived?"True":"False"}
        </div>
        <div
         className="calldetaildesc"
        >
          <Tooltip title="Duration">
            <AvTimerIcon />
          </Tooltip>
          {formatTime(callDetail.duration)}
        </div>
        <div
             className="calldetaildesc"

        >
          <Tooltip title="Time">
            <QueryBuilderIcon />
          </Tooltip>
          {moment(callDetail.created_at).format("llll")}
        </div>
        <div className="calldetaildesc"><span>Status</span>{capitalizeFirstLetter(callDetail.call_type)}</div>
      </div>
    </div>
  );
};

export default CallDetail;
