  [![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

  # Tic Tac Toe web game

  Tic Tac Toe is a game played by two players. Each player takes a turn marking a space in a 3x3 grid until a single player succeeds in placing three of their own marks in a horizontal, vertical, or diagonal row resulting in a win.

  [Play the game here!](https://discocisco.github.io/tictactoe-client)

  ## Technologies used

  - Hypertext Markup Language (HTML)
  - Cascading Style Sheets (CSS)
  - Sass (SCSS)
  - JavaScript
  - Ajax language
  - jQuery
  - Bootstrap
  - Git
  - cURL
  - API's created and provided by GA Instructors

  ## Development process and strategy

  The focus of this project was to handle one specific feature then write out the corresponding technologies or languages used for that feature. If no glaring issues were present, the strategic flow went something like:
  - Test feature through `cURL` scripts
  - Create necessary forms, buttons, or sections in `index.html` for feature location
  - Write `jQuery` calls that initialize handling of target events
  - Organize and structure the events necessary for the feature
  - Send API calls as necessary to reflect user events in the API given by GA in the back end
  - Display events or text for user interaction on the front end

  If the intended feature encountered a bug in any of the steps listed above, workarounds were made starting in the area where the error occured and moving in reverse of the list above until a fix could be applied.

  After adequate results were obtained, style elements were adjusted to help aid in user interaction. Bootstrap was used as the main techology during this process with light use of Sass where appropriate.

  ## The future is closer than you think

  - Player 2 is supported using this API supplied from GA, however, the current state in this project does not support a player 2 to sign-in.
  - Multiplayer functionality that enables two players to play the same game using two separate devices is not yet supported.
  - In the console a bug is found after displaying all the games played by a single user. If the user should click the area surrounding a button, **but not the button itself**, after attempting to load a previous game, this project will attempt an API call with no information supplied. This is not reflected during the user interaction nor does it prevent the game from functioning properly.

  ### Wireframes and user stories

  [] [Wireframes located here](https://imgur.com/a/Bt0sZWc)
  [] User stories:
  - As a player, I want to create a profile so that the game remembers me.
  - As a user, I want to be able to play the game.
  - As a user, I want to play a game so that the game remembers my result.
  - As a user, I want to be able to change my password because YIKES.
  - As a user, I want to be able to access specific games.
  - As a user, I want to be able to sign out for security.
