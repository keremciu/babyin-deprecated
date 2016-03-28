# Babyin

### SaaS solution for preschools

We use mantrajs to build this project.

Please make sure you read [Mantra Specification](https://kadirahq.github.io/mantra/) and visit the [official repository](https://github.com/kadirahq/mantra). Keep in mind that Mantra is an approach to application architecture rather than a framework.

Flowrouter

### Features

* follows mantra feature specific modules approach, if interested please join an [ongoing discussion here](https://github.com/kadirahq/mantra/issues/3)

* formsy-react for all form views [formsy-react](https://github.com/christianalfoni/formsy-react)

* material-ui to build interface

* user registration, login, logout with application wide state, composed in pure React JS components with [react-komposer](https://github.com/kadirahq/react-komposer) (there is no blaze ui, or any blaze to react)

* [tcomb-form](https://github.com/gcanti/tcomb-form) based forms in Colors module.

* [meteor astronomy](https://github.com/jagi/meteor-astronomy) models (looking forward to the upcoming v2)

* bootstrap theme module based on [Flatly](https://bootswatch.com/flatly/) with a configuration file, you can replace it or remove if you have other requirements

### Setting Up

* make sure you have Meteor installed
* clone this repo
* make sure you are on v0.1.1 branch

```
npm install
meteor --port 5005
```
Your app should be running [http://localhost:5005](http://localhost:5005)

### Roadmap

This is an closed alpha version.

Mantra architecture is very fresh and React environment is quite dynamic, that means things will change and break. We will be following the discussions and will try to keep this project up to date.

The goal is to bring some simple yet valuable to most apps features:

* user management
* role management
* ACL management
* profile page
* account page
* advanced CRUD component with pagination
* file manager

### Running Tests (to be completed)

In this app, every part of the client side is fully tested using the familiar tools like Mocha, Chai and Sinon.

Run tests with:

```
npm test
```

**See package.json for more information about testing setup.**
