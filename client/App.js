import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as request from 'superagent';
import {Box, Flex, Heading, Text} from 'rebass';
import './App.css';

const ping = () => {
  return request.get('/api/ping').then(res => res.body.message);
};

class App extends React.Component {
  componentDidMount() {
    return ping()
      .then(() => console.log('Server is up and running!'))
      .catch(err => console.log('Server is down!', err));
  }

  render() {
    return (
      <Flex
        p={6}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box mb={3}>
          <Heading>Hello! 👋</Heading>
        </Box>

        <Box>
          <Text>Get started in App.js</Text>
        </Box>
      </Flex>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
