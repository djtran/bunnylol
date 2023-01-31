# djtran's personal BunnyLOL
Quick clone of @rithik/bunnylol

## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `https://djtran.github.io/bunnylol/index.html?search=%s`. 

4. Make this the default search engine.

## Adding a command

1. Run `npm install` so that `flow` (JavaScript type checker) can run.

2. Open up the `src/commands.js` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube). Run `npm run flow` for type checking.

3. Run `npm run pub`.

4. Test, commit, push

Note that the cache ttl set by github pages is set to 600 (10 minutes), so after you make any changes or push you won't see a change for 10 minutes. As far as I can tell, there's no way to change that setting.
