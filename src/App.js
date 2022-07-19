import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button} from '@mui/material';
import {Tooltip} from '@mui/material';

const App = () => {
const blue = "#3498dc";

const [curbg, lBg] = useState(blue);
const [curtext, lText] = useState("sad 😢");


  const newbg = () => {
    let nextbg = "#e74c3c";
    lBg(nextbg);
    lText("sad 😢");
    
  };

  const newtext = () =>{
    lText("happy 😃 "); 
    lBg(blue);
  }

  return(
    <div className="row text-center">
    <div className="col-md-4-auto">
    <div className="bg" style={{ backgroundColor: curbg }}>
    <Tooltip title="Change my mood 🔥" arrow> 
    <Button variant="contained" onClick={newbg} onDoubleClick={newtext}>{ curtext } </Button>
    </Tooltip>
    </div>
    </div>
    </div>
  );
};

export default App;