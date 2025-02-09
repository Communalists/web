# Communalists Web

## Quickstart

First go through the below items and follow their installation guides:

- [Docker](https://docs.docker.com/engine/install/)

After installation, copy the `.default.env` file and rename it to `.env`, you shouldn't have to change any of the values inside unless you're deploying for production.

Now, go to "Run and Debug" on the left side-bar of your VSCode. It should open the "Run and Debug" menu and at the top the dropdown should automatically say "Full". Click on the green play button and it should start up the application, it should pull up the bottom panel with a terminal displaying the containers being built and ran.

After you're done running, click on the red square to stop the application. DO NOT CTRL+C, if you do this won't shut down the Docker containers correctly and might cause your machine to slow down later down the line.
