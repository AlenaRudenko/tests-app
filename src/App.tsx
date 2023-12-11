import { FC, useState } from "react";

import "./style.css";

export const App: FC<{ name: string }> = ({ name }) => {
  const [] = useState(2);
  const tempVar = 5;
  console.log("           dsds");
       

















  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
