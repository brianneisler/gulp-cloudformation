import { expect } from 'chai'
import sinon from 'sinon'
import GulpCloudformation from '../GulpCloudformation'

function mockCloudformation(options) {
  return {
    options,
    validateTemplate: sinon.spy(function(value, callback) {
      callback()
    })
  }
}

function mockFile(options = {}) {
  return {
    isNull: () => options.isNull,
    isStream: () => options.isStream,
    contents: {
      toString: () => options.contents || ''
    }
  }
}

describe('GulpCloudformation', function() {
  it('validate returns an object', function() {
    const mock = mockCloudformation({})
    const gulp = new GulpCloudformation(mock)
    const result = gulp.validate()
    expect(result).to.be.an('object')
  })

  it('validate stream transform calls validateTemplate', function() {
    const mock = mockCloudformation({})
    const gulp = new GulpCloudformation(mock)
    const result = gulp.validate()
    const file = mockFile({
      contents: JSON.stringify({})
    })
    const done = sinon.spy()
    result._transform(file, 'utf8', done)
    expect(done.calledOnce).to.be.true
  })
})
