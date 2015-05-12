# trybe

> Social Workouts for the CrossFit Community 

## Team

  - __Product Owner__: Vince Tam
  - __Scrum Master__: Ron Tsui
  - __Development Team Members__: Justin Webb, Nimi Dharithreesan

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development Guide](#development-guide)
1. [Team](#team)
1. [Contributing](#contributing)

# Development Guide

All project tools must be compatible between OSX and Linux systems. The standard project tools appear below.

## Sublime Text 3
Sublime Text 3 is the chosen editor for members of the Trybe project. You can use whatever text editor or IDE you choose, however using Sublime Text with the settings described below will make it easier to adhear to project style guide and coding standards.

### Project File (trybe.sublime-project)

The project file standardizes a key editor settings between project members. For example, the file sets a default tab size for all new files to '2' and automattically translates all tab input to spaces. Another helpful setting; it displays two verical lines in the editor, the first (60 spaces) marks the border for comments, the second (80 spaces) marks the border code.

### Plugins

Project plugins are seprated to the groups 'suggested', 'linters', and 'themes'. The suggested plugins are optional but strongly recommended for project synchronicity.  The linters are manditory.  A small amount of study is required ahead of configuration.  Themes are optional but installing at least one of them is recommended, as they will help with linter highlighting, sidebar organization, and more.

#### Suggested Plugins

* Sidebar Enhancements
* DocBlockr
* File​Header
* Markdown Preview
* Alignment
* JavaScriptNext ES6 Syntax
* Bracket Highlighter
* Pretty JSON
* Emmet
* Color Highlighter
* SCSS (text mate bundle)
* Jasmine JS

#### Linter Plugins

Remember to [Read The Docs](http://www.sublimelinter.com/en/latest/index.html) before installing! For information specific to connecting your linters to Sublime Text themes, [check out the usage page](http://www.sublimelinter.com/en/latest/usage.html).

* SublimeLinter
* SublimeLinter-jshint
* SublimeLinter-contrib-scss-lint

### Themes

Themes are optional. Your theme selection is largely a matter of preference. The most useful themes can be combined with linters to present graphic feedback on warnings and errors.  For example, ITG Flat, a project-favorite theme, can be setup inside `Preferences.sublime-settings` to affect Sublime Text's theme and color scheme.

```
{
  "color_scheme": "Packages/User/SublimeLinter/itg.dark (SL).tmTheme",
  "show_color_scheme_info": true,
  "theme": "itg.flat.dark.sublime-theme"
}
```

LightCante's list of favorite themes appears below:

* [ITG Flat](http://itsthatguy.com/post/70191573560/sublime-text-theme-itg-flat)
* [Farzer](http://devthemez.com/farzher)
* [Spacegray](http://kkga.github.io/spacegray/)
* [Afterglow](http://yabatadesign.github.io/afterglow-theme/)


### ZSH

ZSH is an command line terminal with powerful capabilities. It comes from bash, ksh, and tcsh. Installation of this command line terminal is optional. 

### Getting Set Up

#####Development Environment 

1. Ensure you have mysql installed by running <code>which mysql</code>. If not installed, run <code>brew install mysql</code>. For Linux machines, run <code>sudo apt-get install mysql-server</code>. You can then decide to enter as a root user or create a normal user (https://dev.mysql.com/doc/refman/5.5/en/changing-mysql-user.html). To enter the mysql environment, run <code>mysql -u root</code>. (Or whichever username you decide). Upon entering, create a trybe database with the following command: <code>create database 'trybe';</code>. To use this database, run <code>use trybe;</code>. If you run <code>show tables;</code>, you will not see any tables because you haven't actually run your server yet. 

2. Outside of the mysql environment, in your directory, run <code>npm install</code>. 

3. Upon completion, run <code>bower install</code>. 

4. You should now have all of your front and back end dependencies. Now run <code>grunt build</code>. This command will build the tables from the schemas in trybe/server/models. 

5. In the terminal, set the following variables: DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST. Then run <code>export DATABASE_USERNAME DATABASE_PASSWORD DATABASE_HOST DATABASE_NAME</code>

6. Run <code>nodemon server/server.js</code> to start the server on your machine.

#####Deployment Environment

1. Contact us (lightcante team) for environmental variables for online Heroku app. We will give you the credentials then. 

2. Copy and paste them into your terminal and press 'Enter'. 

3. Run <code>nodemon server/server.js</code>. You will now be interacting directly with the Cleardb database. 

## Requirements

- Angular 1.3.15
- Angular UI Router
- Bootstrap-Sass-Official 3.3.4
- Font-Awesome 4.3.0
- Lodash 3.7.0
- Grunt 0.4.5
- Jasmine 2.3.1
- Karma 0.12.31
- Node 0.10.x
- Express 4.12.3
- mySql 5.5
- Sequelize 2.1.0
- Passport 0.2.1

### Roadmap

View the project roadmap [on waffle.io](https://waffle.io/lightcante/trybe)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
