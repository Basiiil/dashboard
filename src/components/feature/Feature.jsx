import React from 'react';
import './feature.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


const Feature = () => {
  const props = {
    percent: 70,
    colorCircle: "#ccc",
    fontColor: "#365b74",
    fontSize: "1.6rem",
    size: 100,
    stroke: 10,
    strokeBottom: 5,
    speed: 60,
    opacity: 10,
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "10,1",
    inverse: false,
    round: false,
    number: true,
  };

  return (
    <div className='feature'>
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressBar
            {...props}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature