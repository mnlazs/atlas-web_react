import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18'


if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}

configure ({adapter: new Adapter()});
