# projector-cli

> Command-line tool for running Projector scripts

### Installation

First, make sure you have [Yarn](https://yarnpkg.com/) and Node 8 (or above)
installed.

Then install the following in your project:

```sh
yarn add --dev projector-cli
```

### Usage

**Create a projector.js file**

```js
exports.build = async () => {
  console.log('Hello World!');
};
```

**Run the following command**

```sh
yarn run -s projector ./path/to/projector.js build
```

**You should see something like this**

```
$ "/Users/me/projects/repo/node_modules/.bin/projector" "./projector.js" "build"
Hello World!
Done in 0.70s.
```

**You can store this command inside of package.json#scripts**

```json
{
  "name": "project-name",
  "version": "1.0.0",
  "scripts": {
    "build": "projector ./projector.js build"
  },
  "devDependencies": {
    "projector": "*"
  }
}
```
