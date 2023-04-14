#!/usr/bin/env node
import userName from '../cli.js';

export default () => {
  console.log(`Hello, ${userName()}!`);
};
