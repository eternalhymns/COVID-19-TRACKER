import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ title, cases, total }) {
  return (
    <div>
      <Card className="infoBox">
        <CardContent>
          {/* Title (Coronavirus cases) */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          {/* Number of cases (+120 K) */}
          <h2 className="infoBox__cases">+ {cases}</h2>
          {/* Total (1.2 M) */}
          <Typography className="infoBox__total">{total} Total</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
