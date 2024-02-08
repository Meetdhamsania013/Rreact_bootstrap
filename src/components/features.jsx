import React from "react";
import { useCallback, useEffect, useState } from "react";
import Card from "../components/Card/Card";

const data = [
  {
    id: "1",
    url: "https://www.shutterstock.com/shutterstock/photos/2291517189/display_1500/stock-vector-p-dummy-logo-template-design-2291517189.jpg",
    text: "Architecture and Design",
    category: "Healthcare",
    altText: "Healthcare",
  },
  {
    id: "2",
    url: "https://img.freepik.com/free-vector/ui-ux-differences-concept-illustration_114360-10979.jpg?w=740&t=st=1704543744~exp=1704544344~hmac=6d5d14afc7f679940ab0f0c90f313b0f9db9bdafa3c231cf6d4223d93ac85283",
    text: "Green Building",
    category: "Green Building",
    altText: "Green Building",
  },
  {
    id: "3",
    url: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1704543661~exp=1704544261~hmac=66d44e366ef95fd243da0b0aa41491cf4849d324940b05f7449d61c6f6eae77b",
    text: "Development",
    category: "Development",
    altText: "Development",
  },
  {
    id: "4",
    url: "https://www.shutterstock.com/image-vector/growth-dummy-logo-template-design-260nw-2183996087.jpg",
    text: "Healthcare",
    category: "Healthcare",
    altText: "Healthcare",
  },
  {
    id: "5",
    url: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=996&t=st=1704543768~exp=1704544368~hmac=af060d639e32b78f16261d84db241e3f3f0b47278d034a4ebdc68971ac68eceb",
    text: "Green Building",
    category: "Green Building",
    altText: "Green Building",
  },
  {
    id: "6",
    url: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1704543685~exp=1704544285~hmac=0725a407a376f3ec5e15dc8a40a83194b713dd357b65f6ed67b1206f92a70c4e",
    text: "Development",
    category: "Development",
    altText: "Development",
  },
  {
    id: "7",
    url: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1704543707~exp=1704544307~hmac=901f41f9e4e1da5f0eec28a9bba513b571d5b85c20f7dec954869f237ff5fac9",
    text: "Development",
    category: "Development",
    altText: "Development",
  },
  {
    id: "8",
    url: "https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1704543611~exp=1704544211~hmac=34e2ebfe158dca9bef71b68baa9451d455b0626bc7392dcb27661972646463c4",
    text: "Healthcare",
    category: "Healthcare",
    altText: "Healthcare",
  },
];

export const Features = (props) => {
  const [activeCatgeory, setActiveCatgeory] = useState("All");
  const [filteredData, setFilteredData] = useState(data);

  const handleItemClick = (itemName) => {
    setActiveCatgeory(itemName);
  };

  const handleDataFilter = useCallback(
    (activeCatgeory) => {
      const filterData =
        activeCatgeory === "All"
          ? data
          : data.filter((item) => item.category === activeCatgeory);

      setFilteredData(filterData);
    },
    [data]
  );

  useEffect(() => {
    handleDataFilter(activeCatgeory);
  }, [activeCatgeory, handleDataFilter]);

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Featured Works</h2>
          <div className="title_desc">
            Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus
            definiebas cum et. Duo id omnis persequeris neglegentur, facete
            commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit
            eos ex. Sea utamur iisque salutatus id.Mel autem animal.
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="portfolio-items">
            <div className="option">
              <span
                className={activeCatgeory === "All" ? "active" : ""}
                onClick={() => handleItemClick("All")}
              >
                All
              </span>
              <span
                className={activeCatgeory === "Healthcare" ? "active" : ""}
                onClick={() => handleItemClick("Healthcare")}
              >
                Healthcare
              </span>
              <span
                className={activeCatgeory === "Green Building" ? "active" : ""}
                onClick={() => handleItemClick("Green Building")}
              >
                Green Building
              </span>
              <span
                className={activeCatgeory === "Development" ? "active" : ""}
                onClick={() => handleItemClick("Development")}
              >
                Interior Design
              </span>
            </div>
            <div className="cardWrapper">
              {filteredData.map((item, index) => (
                <Card key={item.url} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
