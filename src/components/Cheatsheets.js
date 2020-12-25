import { Divider, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import jsCheatSheet from "./assets/cheatsheets/javascrpt.md";

export default function Cheatsheets() {
  const [markdownContent, setMarkDownContent] = useState("");
  useEffect(() => {
    fetch(jsCheatSheet)
      .then((data) => {
        return data.text();
      })
      .then((fileContent) => {
        setMarkDownContent(fileContent);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h4" align="center">
          Cheatsheets
        </Typography>
        <Divider />
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </Container>
    </>
  );
}
