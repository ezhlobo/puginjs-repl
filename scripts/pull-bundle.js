const fs = require('fs')
const { execSync } = require('child_process')

const version = process.argv[2]

function message(text) {
  console.log(`\n\t${text}\n`)
}

if (!version) {
  message('Version is obligatory')
  process.exit(1)
}

function filepath(filename) {
  return [`./bundles/${version}`, filename].filter(Boolean).join('/')
}

if (fs.existsSync(filepath('index.js'))) {
  message('Version exists')
  process.exit()
}

generate()
build()
updateListOfVersions()

function generate() {
  if (!fs.existsSync(filepath())) {
    fs.mkdirSync(filepath())
  }

  fs.writeFileSync(filepath('package.json'), `{"private": "true","dependencies": {"babel-plugin-transform-react-pug": "${version}"}}`)
  fs.writeFileSync(filepath('init.js'), `module.exports = require('babel-plugin-transform-react-pug')`)

  execSync(`cd ${filepath()} && yarn --no-lockfile`)
}

function build() {
  try {
    execSync(`./node_modules/.bin/browserify ${filepath('init.js')} --node --standalone plugin -o ${filepath('index.js')}`)
  } catch (e) {
    if (e.message.indexOf('Cannot find module \'babel-core\'') !== -1) {
      const babelCoreVersion = execSync(`npm info "babel-plugin-transform-react-pug@${version}" devDependencies.babel-core`).toString().trim()

      message(`Adding "babel-core@${babelCoreVersion}"`)

      execSync(`cd ${filepath()} && yarn --no-lockfile add babel-core@${babelCoreVersion}`)

      build()
    } else {
      process.exit(1)
    }
  }
}

function updateListOfVersions() {
  const versions = fs.readdirSync('./bundles')

  fs.writeFileSync('./lib/versions.js', `export default [${versions.reverse().map(item => `'${item}'`).join(', ')}]`)
}
