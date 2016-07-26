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
  storybook: require("./assets/storybook-loaded.png"),
  storybookDemo: require("./assets/react_storybook_demo.gif"),
  problems: require("./assets/first_world_problems.png"),
  surprise: require("./assets/surprise.png")
};

preloader(images);

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide", "slide"]} transitionDuration={200}>
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              React Storybook
            </Heading>
            <Text>React JS Barcelona Meetup, July 25th, 2016</Text>
          </Slide>

          <Slide>
            <Heading caps fit lineHeight={1}>
              What is a React application made of?
            </Heading>
            <br />
          </Slide>

          <Slide transition={"none"}>
            <Heading caps fit lineHeight={1}>
              What is a React application made of?
            </Heading>
            (Spoiler: Components)
          </Slide>

          <Slide bgColor="primary">
            <Heading caps lineHeight={1}>
              The Problems
            </Heading>
            <br />
            <Image height={150} src={images.problems} />
            <List>
              <ListItem>Lack of use cases</ListItem>
              <ListItem>Slow development</ListItem>
              <ListItem>Dirtiness</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading caps lineHeight={1}>
              The solution
            </Heading>
            <br />
            <Image height={400} src={images.storybookDemo}/>
          </Slide>

          <Slide bgColor="primary">
            <BlockQuote size={1}>
              <Quote>With React Storybook, you can develop and design UI components outside your app in an isolated
                environment. It will change how you develop UI components.</Quote>
              <Cite>Arunoda Susiripala</Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} caps lineHeight={1}>
              Demo Time
            </Heading>
            <Text size={1} fit lineHeight={1}>
              <Link href='http://localhost:9001' target='storybook'>http://localhost:9001</Link>
            </Text>
          </Slide>

          <Slide bgColor="primary">
            <Heading>Key benefits</Heading>
            <List>
              <ListItem>Isolation</ListItem>
              <ListItem>Props mocking</ListItem>
              <ListItem>Action logger</ListItem>
              <ListItem>Hot reloading</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading>Plus</Heading>
            <List>
              <ListItem>Extensions</ListItem>
              <ListItem>Customizable</ListItem>
              <ListItem>Runs anywhere</ListItem>
              <ListItem>Showcase your components (<Link href='https://github.io'
                                                        target='storybook'>github.io</Link>, <Link href='https://storybooks.io'
                target='storybook'>storybooks.io</Link>...)</ListItem>
              <ListItem>Supports React Native</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Setting up React Storybook
            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <Text>
              Install React Storybook
            </Text>
            <br />
            <CodePane>npm install @kadira/storybook --save-dev</CodePane>
          </Slide>

          <Slide bgColor="primary">
            <Text size={2}>
              Add an npm script to your package.json
              <br /><br />
              <CodePane>
                "workbench": "start-storybook -p 9001"
              </CodePane>
            </Text>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Configure React Storybook
            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <List>
              <ListItem>Create a folder in the root of your project called <code>.storybook</code></ListItem>
              <ListItem>In that folder create a file called <code>config.js</code></ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary">
            <Text>.storybook/config.js</Text>
            <br />
            <CodePane>
{`import { configure } from '@kadira/storybook';

function loadStories() {
    require('../workbench/');
}

configure(loadStories, module);
`}</CodePane>
          </Slide>

          <Slide bgColor="primary">
            <List>
              <ListItem>Create a folder in the root of your project called <code>workbench</code></ListItem>
              <ListItem>In that folder create a file called <code>index.js</code></ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Text>workbench/index.js</Text>
            <br />
            <CodePane>
{`import {storiesOf,action} from '@kadira/storybook';
import React from 'react';
import SimpleComponent
  from '../src/components/simpleComponent.jsx';

storiesOf('SimpleComponent', module)
  .add('default', () =>
    <SimpleComponent onClick={action('clicked')}>
            Click Me</SimpleComponent>);`}
            </CodePane>
          </Slide>

          <Slide bgColor="primary">
            <Text>
              Now run...
            </Text>
            <br />
            <CodePane>npm run workbench</CodePane>
            <br />
            <Text>and open a browser at <Link href='http://localhost:9001'
                                              target='storybook'>http://localhost:9001</Link></Text>
          </Slide>

          <Slide bgColor="primary">
            <Image height={500} src={images.storybook} />
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} caps lineHeight={1}>
              And this?
            </Heading>
            <br />
            <Text>
              <SimpleComponent>I'm the button<br />you saw in the demo</SimpleComponent>&nbsp;&nbsp;<SimpleComponent
              disabled={true}>I'm the disabled button<br />you saw in the demo</SimpleComponent>
            </Text>
          </Slide>

          <Slide bgColor="primary">
            <Image height={300} src={images.surprise} />
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} caps lineHeight={1}>
              Alternative tools
            </Heading>
            <br />
            <Text>
              UI Harness <Link href='http://www.uiharness.com/' target="_blank">www.uiharness.com</Link>
            </Text>
            <br />
            <Text>
              Carte Blanche <Link
              href='https://github.com/carteb/carte-blanche'
              target='_blank'>github.com/carteb/carte-blanche</Link>.
            </Text>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Why We Chose Storybook?
            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Source Code and Slides
            </Heading>
            <br />
            <Text>
              Thanks <strong>Nick Taylor</strong>, the creator of this slide, visit him at <Link
              href='https://iamdeveloper.com' target='_blank'>iamdeveloper.com</Link>
            </Text>
            <br />
            <Text size={1} fit lineHeight={1}>
              Download the source code and slides from <Link href='https://git.io/vKywa' target='_blank'>git.io/vKywa</Link>
            </Text>
          </Slide>

          <Slide bgColor="primary">
            <Heading caps>
              Thanks OSS
            </Heading>
            <Text>
              <List>
                <ListItem>
                  Spectacle <Link
                  href='https://github.com/FormidableLabs/spectacle' target='_blank'>github.com/FormidableLabs/spectacle</Link>
                </ListItem>
                <ListItem>
                  The Kadira team <Link href='https://github.com/kadirahq' target='_blank'>github.com/kadirahq</Link>
                </ListItem>
                <ListItem>Arunoda <Link href='https://github.com/arunoda' target='_blank'>github.com/arunoda</Link></ListItem>
              </List>
            </Text>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1}>
              Questions?
            </Heading>
          </Slide>

          <Slide>
            <Heading>About us</Heading>
            <br />
            <Text>
              Find us online at <Link href='http://weareadaptive.com' target='_blank'>weareadaptive.com</Link>
            </Text>
            <br />
            <Text>
              Twitter <Link href='https://twitter.com/weareadaptive' target='_blank'>@weareadaptive</Link>
            </Text>
            <br />
            <Text>
              Github <Link href='https://github.com/AdaptiveConsulting' target='_blank'>AdaptiveConsulting</Link>
            </Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
