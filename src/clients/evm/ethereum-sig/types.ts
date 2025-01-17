export const domain = {
  name: 'snapshot-x',
  version: '0.1.0'
};

export const proposeTypes = {
  Propose: [
    { name: 'space', type: 'address' },
    { name: 'author', type: 'address' },
    { name: 'metadataURI', type: 'string' },
    { name: 'executionStrategy', type: 'Strategy' },
    { name: 'userParams', type: 'bytes' },
    { name: 'salt', type: 'uint256' }
  ],
  Strategy: [
    { name: 'addy', type: 'address' },
    { name: 'params', type: 'bytes' }
  ]
};

export const voteTypes = {
  Vote: [
    { name: 'space', type: 'address' },
    { name: 'voter', type: 'address' },
    { name: 'proposalId', type: 'uint256' },
    { name: 'choice', type: 'uint8' },
    { name: 'userVotingStrategies', type: 'IndexedStrategy[]' },
    { name: 'voteMetadataURI', type: 'string' }
  ],
  IndexedStrategy: [
    { name: 'index', type: 'uint8' },
    { name: 'params', type: 'bytes' }
  ]
};
