# Handlebars Formatter

This extension allow you to format handlebars files using the currently unreleased Prettier `glimmer` parser

Because it uses unreleased, it may break with future changes to Prettier.

## Configuration

This extension should respect options declared in `.prettierrc`.  If you wish to provide specific overrides you can do so like this

```
{
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.hbs",
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

## Features

Format your handlebars files with Prettier ... that's it!

Example below from a slightly complex template from [Discourse](https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/templates/preferences-username.hbs)

Before

![before](/images/before.png)

After

![after](/images/after.png)

## Usage
Using Command Palette (CMD/CTRL + Shift + P)

`CMD + Shift + P` -> Format Document
OR
`CMD + Shift + P` -> Format Selection

## Extension Settings

This extension has no user configurable options at this point
