'use strict';

const path = require('path');
const commandxPath = path.dirname(require.resolve('commandx/package.json'));
const AgentX = require('ea-agentx');

class AgentHub extends AgentX {
  constructor(config) {
    super(Object.assign({
      server: 'http://eagleeye.zuzuche.com:9527/node-monitor',
      // server: 'eagleeye.zuzuche.com/node-monitor',
      // server: 'wss://agentserver.node.aliyun.com:8080',
      heartbeatInterval: 60,
      reconnectDelay: 10,
      reportInterval: 60,
      logdir: '/tmp/',
      cmddir: commandxPath,
      error_log: [],
      packages: [],
    }, config));
  }
}

module.exports = AgentHub;
