import React from "react";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import ContactsIcon from "@mui/icons-material/Contacts";
import { IconButton } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footercontainer">
        <ul className="footeritem">
          <li>
            <IconButton>
              <CallIcon style={{color:'#2AC420'}} />
            </IconButton>
          </li>

          <li>
            <IconButton>
              <Person2Icon style={{color:'#2AC420'}} />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <SettingsIcon style={{color:'#2AC420'}}/>
            </IconButton>
          </li>
          <li>
            <IconButton>
              <ContactsIcon style={{color:'#2AC420'}} />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
