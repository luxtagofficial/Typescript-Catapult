# Typescript-Catapult
<p align="center">
  <p align="center">
    <a href="https://travis-ci.org/luxtagofficial/Typescript-Catapult"><img src="https://travis-ci.org/luxtagofficial/Typescript-Catapult.svg?branch=master"></a>
    <a href="https://codecov.io/gh/luxtagofficial/Typescript-Catapult">
    <img src="https://codecov.io/gh/luxtagofficial/Typescript-Catapult/branch/master/graph/badge.svg" />
    </a>
  </p>
</p>

A fully automated Typescript environment to start building your tools for catapult.

Because of a security vulnerability in a dependency in nem-sdk, you need to force resolution of dependencies.
Run `npx npm-force-resolutions` before you do `npm install`.

You do **not** need to run `npx npm-force-resolutions` if you use yarn.

# Easy as 1,2,3
1- You can use this repo by cloning it to your local machine in a new folder as follow
```bash
git init
git clone https://github.com/luxtagofficial/Typescript-Catapult.git
```
2- Once done you need to point the remote origin to your own git repository
```bash
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```
3- There was never a third step, start writing some code!
# What do you get
**Linting:**
- [tslint](https://github.com/palantir/tslint)

**Testing:**
- [jest](https://github.com/facebook/jest)
- [sinon](https://github.com/sinonjs/sinon)

**development:**
- [Typescript](https://github.com/Microsoft/TypeScript)
- [nem2-sdk](https://github.com/nemtech/nem2-sdk-typescript-javascript)
- [apostille-library](https://github.com/luxtagofficial/Apostille-library)
- [nem-sdk](https://github.com/QuantumMechanics/NEM-sdk)
- [crypto-js](https://github.com/brix/crypto-js)
- [js-sha3](https://github.com/emn178/js-sha3)
- [lodash](https://github.com/lodash/lodash)
- [rxjs](https://github.com/ReactiveX/rxjs)

**Automation:**
- Travis CI
- Code Coverage
- Automatic release and changelog (Please read the [Guide](./.github/GUIDE.md) on how to use it)

# Contribution
For future contributors please make sure to read the [Contributing Guide](./.github/GUIDE.md) before making a pull request

Thank you to all the people who already contributed.