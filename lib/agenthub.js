'use strict';

const path = require('path');
const eacommandxPath = path.dirname(require.resolve('ea-commandx/package.json'));
const AgentX = require('ea-agentx');

class AgentHub extends AgentX {
  constructor(config) {
    super(Object.assign({
      server: 'eagleeye.zuzuche.com/node-monitor',
      // server: 'node.zuzuche.net:3000/node-monitor',
      // server: 'wss://agentserver.node.aliyun.com:8080',
      heartbeatInterval: 60,
      reconnectDelay: 10,
      reportInterval: 60,
      logdir: '/tmp/',
      cmddir: eacommandxPath,
      error_log: [],
      packages: [],
    }, config));
  }
}

module.exports = AgentHub;
