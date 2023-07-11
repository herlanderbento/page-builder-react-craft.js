import { Editor, Frame, Element } from "@craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React from "react";

import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { Video } from "../components/selectors/Video";
import { Input } from "../components/selectors/Input";
import { Textarea } from "../components/selectors/Textarea";
import { Image } from "../components/selectors/Image";
import { Form } from "../components/selectors/Form";
import { Card } from "../components/selectors/Card";
import { Navbar } from "../components/selectors/Navbar";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: "craft.js.org",
            cardType: "summary_large_image",
          }}
        />
        <Editor
          resolver={{
            Container,
            Text,
            Button,
            Video,
            Input,
            Textarea,
            Image,
            Form,
            Card,
            Navbar
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Container}
                width="800px"
                height="auto"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={["40", "40", "40", "40"]}
                custom={{ displayName: "App" }}
              >
                <Element canvas is={Container} width="100%"></Element>
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
