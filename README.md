# Microsoft Teams 'Get Started' sample tab app

This is a basic example tab app for Microsoft Teams.  When it is added to a channel, it enables the user to choose whether they want a Bing Map or a Google Map in their new tab.  When it is removed from a channel, it offers (pretend) options for the user to choose whether the map is deleted or retained online. 

This app is used throughout the Microsoft Teams [developer documentation](https://aka.ms/microsoftteamstabsplatform). 

## Prerequisites

An [Office 365 account with access to Microsoft Teams]().

**TODO make this a link to setup.md in main docs repo**

## Run the app

1. Download the [tab app package](https://github.com/OfficeDev/microsoft-teams-sample-get-started/blob/master/package/MapsTab.zip) for this sample. 
2. Create a new team for testing, if necessary.  Click **Create team** at the bottom of the left-hand panel.
3. Select the team from the left-hand panel, select **... (more options)** and then select **View Team**.
4. Select the **Developer (Preview)** tab, and then select **Upload**.
5. Navigate to the zip file and select it.
6. Go to any channel in the team.  Click the '+' to the right of the existing tabs. 
7. Select your tab from the gallery that appears.
8. Accept the consent prompt.
9. Select the type of map you want, and click Save.

## Adapt the app yourself

This sample works because its [configuration page]() (tabconfig.html) and [removal options page]() (tabremove.html) are already hosted in Azure at `https://teams-get-started-sample.azurewebsites.net`.  If you want to adapt this sample, you'll need to edit them and host them yourself.  

**TODO fix links**

1. Clone the repo
2. Navigate to the `package` directory.
3. Edit `manifest.json`
   1. Change `id` to your own domain in reverse notation.
   2. Change `configUrl` to `https://localhost:3000/public/tabconfig.html`
4. Optionally, make a simple change to `maps44.png` and `maps88.png` in an image editor. This will help you later to verify your own copy of the tab is running. 
5. Put `manifest.json`, `maps44.png`, `maps88.png` into a new tab app package called `NewTab.zip`
5. Edit `public/tabconfig.html` so that the `removeUrl` it returns (in two places) is `https://localhost:3000/public/tabremove.html`
7. Optionally, make a simple change to the visible text in the forms in `public/tabconfig.html` and `public/tabremove.html`. This will help you later to verify your own copy of the tab is running.
8. Install [node.js](https://nodejs.org) if you don't already have it. 
9. Navigate to the repo root
10. `npm install`
11. `npm start`
12. Upload and test your new tab package, `NewTab.zip`, using the instructions above.

> **Note:** To re-upload an updated package, with the same `id`, click the 'Replace' icon at the end of the tab's table row.  Don't click 'Upload' again: Microsoft Teams will say the tab already exists.

