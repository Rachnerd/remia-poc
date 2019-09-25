module.exports = {
  name: 'remia-poc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/remia-poc',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
