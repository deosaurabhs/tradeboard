import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/myjournals/Card";
import Header from "../components/myjournals/Header";

function MyJournal() {
  const [journals, setJournals] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: 32 ,
          }}
        >
          {journals.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default MyJournal;
