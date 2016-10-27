import getInstance from './getInstance'

export default function init(options) {
  const instance = getInstance(options)
  return instance.validate()
}
