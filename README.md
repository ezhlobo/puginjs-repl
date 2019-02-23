# puginjs-repl

Make transformation of pug in js online. Set necessary version and share code snippets by copying URL.

**[puginjs.now.sh](https://puginjs.now.sh/)**

[![Status of develop branch][badge]][CI URL]

[badge]: https://img.shields.io/circleci/project/github/ezhlobo/puginjs-repl.svg?longCache
[CI URL]: https://circleci.com/gh/ezhlobo/puginjs-repl/tree/master

## Add new bundle

Create bundle in repository and create a PR.

```
yarn pull-bundle [version on npm]
```

[See all version on npm](https://www.npmjs.com/package/babel-plugin-transform-react-pug?activeTab=versions)

## Start on localhost

```
yarn dev
```

Will run local development server to test changes.
