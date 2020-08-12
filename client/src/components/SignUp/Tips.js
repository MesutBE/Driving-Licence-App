import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Tips = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p>Tip: create strong and secure<span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">{" "}Password</span></p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
      <ul>
      <li>Minimum 8 Characters</li>
      <li>Includes Numbers, Symbols, Capital Letters, and Lower-Case Letters</li>
      <li>Use a mix of different types of characters</li>
</ul>
        </Tooltip>
    </div>
  );
}

export default Tips;
