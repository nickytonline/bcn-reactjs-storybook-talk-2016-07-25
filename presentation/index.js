// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "./themes/adaptive";

import SimpleComponent from '../src/components/simpleComponent.jsx';

// Require CSS
require("normalize.css");
require("./themes/adaptive/index.css");

const images = {
  storybook: require("./assets/storybook-loaded.png")
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "zoom"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              React Storybook
            </Heading>
            <Text>React JS Barcelona Meetup, July 25th, 2016</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              About the Speaker
            </Heading>
            <List>
              <ListItem><strike>Nick Taylor</strike> Xan Torres Martin, web developer</ListItem>
              <ListItem><strike>From Montreal, Quebec, Canada</strike> Girona, Spain</ListItem>
              <ListItem>Works for Adaptive Financial Consulting Ltd.</ListItem>
              <ListItem>Find us online at <Link href='http://weareadaptive.com' target='_blank'>http://weareadaptive.com</Link></ListItem>
              <ListItem>Find me online at <strike><Link href='https://iamdeveloper.com' target='_blank'>https://iamdeveloper.com</Link></strike> <Link href='https://es.linkedin.com/in/xan-torres-a8606846' target='_blank'>https://es.linkedin.com/in/xan-torres-a8606846</Link></ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              What We'll Cover
            </Heading>
            <List>
              <ListItem>An overview of React Storybook</ListItem>
              <ListItem>Setting up React Storybook</ListItem>
              <ListItem>A demo of React Storybook in action</ListItem>
              <ListItem>
                Out of scope but to get mentions:
                <List>
                  <ListItem>extending React Storybook</ListItem>
                  <ListItem>competing projects</ListItem>
                </List>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              An Overview of React Storybook
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <BlockQuote>
              <Quote>With React Storybook, you can develop and design UI components outside your app in an isolated environment. It will change how you develop UI components.</Quote>
              <Cite>Arunoda Susiripala</Cite>
            </BlockQuote>
            <Text>Source: <Link href="https://voice.kadira.io/introducing-react-storybook-ec27f28de1e2#.wmylm3dx5" target='_blank'>Introducing React Storybook</Link></Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Can create and design components without running your application.</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Can mock props to test different views of your UI, e.g. enabled/disabled.</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Can simulate actions, e.g. click</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Hot reloading allows you to make changes quickly</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Supports React Native</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Showcase your components</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Publish your showcase of components to GitHub</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Setting up React Storybook
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text size={1} fit lineHeight={1}>
              Install React Storybook, <code>npm i @kadira/storybook --save-dev</code>
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text size={2}>
              Add an npm script to your package.json
              <br /><br />
              <Markdown>{`
                  "workbench": "start-storybook -p 9001"
              `}
              </Markdown>
            </Text>
            <br />
            <Text size={3}>Note: The port does not have to be 9001.</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Configure React Storybook
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <List>
              <ListItem>Create a folder in the root of your project called <code>.storybook</code></ListItem>
              <ListItem>In that folder create a file called <code>config.js</code></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Add the following code to config.js and save it</Text>
            <Markdown>
            {`
              import { configure } from '@kadira/storybook';

              function loadStories() {
                  require('../workbench/');
              }

              configure(loadStories, module);
            `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <List>
              <ListItem>Create a folder in the root of your project called <code>workbench</code></ListItem>
              <ListItem>In that folder create a file called <code>index.js</code></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text>Add the following code to index.js and save it.</Text>
            <Markdown>
            {`
              import {storiesOf,action} from '@kadira/storybook';
              import React from 'react';
              import SimpleComponent from '../src/components/simpleComponent.jsx';

              storiesOf('SimpleComponent', module)
                  .add('default', () => <SimpleComponent onClick={action('clicked')}>Click Me</SimpleComponent>);
            `}
            </Markdown>
            <Text>You've created your first story.</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Text size={1} fit lineHeight={1}>
              Now run, <code>npm run workbench</code> and open a browser at <Link href='http://localhost:9001' target='storybook'>http://localhost:9001</Link>.
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Markdown source={`![Storybook Loaded](${images.storybook.replace("/", "")})`} />

          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Demo Time
            </Heading>
            <Text size={1} fit lineHeight={1}>
              <Link href='http://localhost:9001' target='storybook'>http://localhost:9001</Link>
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Use Storybook to edit components of the slide deck
            </Heading>
            <br />
            <Text>
              <SimpleComponent>I'm the button<br />you saw in the demo</SimpleComponent>&nbsp;&nbsp;<SimpleComponent disabled={true}>I'm the disabled button<br />you saw in the demo</SimpleComponent>
            </Text>
            <br />
            <Heading size={2} fit caps lineHeight={1}>
              That's right... this slide deck is a React application. Boom... mind blown.
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Does Anyone Else Do What Storybook Does?
            </Heading>
            <Text>
              At the time of writing, the only project similar to Storybook is Carte Blanche, <Link href='https://github.com/carteb/carte-blanche' target='_blank'>https://github.com/carteb/carte-blanche</Link>.
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Why We Chose Storybook
            </Heading>
            <Text>
              Adaptive went with Storybook because it is the only tool of its kind that currently supports TypeScript via its extension points.
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Extending/Customizing Storybook
            </Heading>
            <List>
              <ListItem>Can customize the webpack configuration for Storybook</ListItem>
              <ListItem><Link href='https://voice.kadira.io/more-ways-to-extend-react-storybook-fde71847c9f8#.2ouah41np'>More ways to Extend React Storybook</Link></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Source Code and Slides
            </Heading>
            <Text fit>
              <Link href='https://github.com/nickytonline/bcn-reactjs-storybook-talk-2016-07-25' target='_blank'>https://github.com/nickytonline/bcn-reactjs-storybook-talk-2016-07-25</Link>
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Thanks OSS
            </Heading>
            <Text>
              <List>
                <ListItem>
                  I highly recommend using Spectacle for any talks/presentations you give. You can grab it here, <Link href='https://github.com/FormidableLabs/spectacle' target='_blank'>https://github.com/FormidableLabs/spectacle</Link>.
                </ListItem>
                <ListItem>
                  Thanks to <Link href='https://github.com/arunoda' target='_blank'>Arunoda</Link> and the entire <Link href='https://github.com/kadirahq' target='_blank'>Kadira</Link> team for their massive contributions to Meteor JS and React.
                </ListItem>
                <ListItem>And a big thank you to Arunoda for reviewing the slide deck.</ListItem>
              </List>
            </Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Questions?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} fit caps lineHeight={1}>
              <Link href='http://weareadaptive.com' target='_blank'>weareadaptive.com</Link>
            </Heading>
            <br />
            <Heading size={2} fit caps lineHeight={1}>
              Twitter <Link href='https://twitter.com/weareadaptive' target='_blank'>@weareadaptive</Link>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
