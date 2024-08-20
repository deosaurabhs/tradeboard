import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/myjournals/Card";
import Header from "../components/myjournals/Header";
import MyContext from "../context/MyContext";

function MyJournal() {
  const { setIsRightSideBarOpen } = useContext(MyContext);

  useEffect(() => {
    setIsRightSideBarOpen(false);
  }, []);

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
            paddingLeft: 32,
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
