import React, { useState } from "react";
import moment from "moment";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Tooltip from "@mui/material/Tooltip";
import CallDetail from "./CallDetail.jsx";
import { HiPhoneIncoming, HiPhoneOutgoing } from "react-icons/hi";
import axios from "axios";
import { formatTime } from "../utils.js";

const Card = ({ data, archive, setData }) => {
  const [info, setInfo] = useState(true);
  const [callDetail, setCallDetail] = useState({});
  const handleInfo = (el) => {
    setCallDetail(el);
    setInfo(false);
  };

  const handleArchive = async (detail, type) => {
    const payload = {
      is_archived: type,
    };
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/activities/${detail.id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };

    try {
      await axios.request(config);
      setTimeout(() => {
        setData((prevData) => prevData.filter((card) => card.id !== detail.id));
      }, 0);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {data.length === 0 && (
        <div className="nologs">
          <p> No Logs</p>
        </div>
      )}
      {info &&
        data.map((el) => (
          <div className="carditem" key={el.id}>
            {el.direction === "inbound" ? (
              <HiPhoneIncoming size={30} style={{ color: "#2AC420" }} />
            ) : (
              <HiPhoneOutgoing size={30} style={{ color: "#2AC420" }} />
            )}
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              <div style={{ marginBottom: "6px" }}>{el.to}</div>
              <div>{formatTime(el.duration)}</div>
            </div>
            <div className="carditem2">
              <div style={{ marginRight: "10px" }}>
                {moment(el.created_at).format("HH:mm")}
              </div>
              <div>
                <Tooltip title={"Info"}>
                  <IconButton onClick={() => handleInfo(el)}>
                    <InfoIcon style={{ color: "#2AC420" }} />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <Tooltip title={archive ? "Archive" : "Unarchive"}>
                  <IconButton onClick={() => handleArchive(el, archive)}>
                    {archive ? (
                      <ArchiveIcon style={{ color: "#2AC420" }} />
                    ) : (
                      <UnarchiveIcon style={{ color: "#2AC420" }} />
                    )}
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      {!info && (
        <div>
          <CallDetail setInfo={setInfo} callDetail={callDetail} /> 
        </div>
      )}
    </div>
  );
};

export default Card;
