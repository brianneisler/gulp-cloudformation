import { CloudFormation } from 'aws-sdk'
import GulpCloudformation from './GulpCloudformation'

let instance     = null

export default function getInstance(options) {
  if (instance === null) {
    if (!options) {
      throw new Error('Must call init() on gulp-cloudformation first')
    }
    instance = new GulpCloudformation(new CloudFormation(options))
  }
  return instance
}
