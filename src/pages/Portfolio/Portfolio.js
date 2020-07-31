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
          tech={content[0].tech}
          href={content[0].site}
          git={content[0].git}
        />

        <Card
        image={require("./img/weather-dash.PNG")}
        title={content[1].title}
        summary={content[1].summary}
        tech={content[1].tech}
        href={content[1].site}
        git={content[1].git}
        />

        <Card
        image={require("./img/burger-app.PNG")}
        title={content[2].title}
        summary={content[2].summary}
        tech={content[2].tech}
        href={content[2].site}
        git={content[2].git}
        />


    </div>
   

    </>
  );
}

export default Portfolio;
