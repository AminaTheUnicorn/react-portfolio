import React from "react";

import Card from "../../components/PortfolioCard/Card";
import content from "../content.json";


function Portfolio() {


  return (
    <>
     <div class="row row-cols-1 row-cols-md-2">
        <Card
          image={require("./img/employee-directory.PNG")}
          title={content[0].title}
          summary={content[0].summary}
        />

        <Card
        image={require("./img/weather-dash.PNG")}
        title={content[1].title}
        summary={content[1].summary}
        />

        <Card
        image={require("./img/burger-app.PNG")}
        title={content[2].title}
        summary={content[2].summary}
        />


    </div>
   

    </>
  );
}

export default Portfolio;
