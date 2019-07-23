---
page_type: sample
products:
- office-teams
- office-365
languages:
- html
- nodejs
extensions:
  contentType: samples
  technologies:
  - Microsoft Bot Framework
  - Tabs
  - Add-ins
  createdDate: 10/28/2016 4:34:42 PM
---
# Microsoft Teams 'Get Started' sample tab app

This is a basic example tab app for Microsoft Teams.  When it is added to a channel, it enables the user to choose whether they want a Bing Map or a Google Map in their new tab.  When it is removed from a channel, it offers (pretend) options for the user to choose whether the map is deleted or retained online.

This app is used throughout the Microsoft Teams [developer documentation](https://aka.ms/microsoftteamstabsplatform).

## Prerequisites

An [Office 365 account with access to Microsoft Teams](https://msdn.microsoft.com/en-us/microsoft-teams/setup).

## Run the app

1. Download the [tab app package](https://github.com/OfficeDev/microsoft-teams-sample-get-started/blob/master/package/MapsTab.zip) for this sample.
2. Create a new team for testing, if necessary.  Click **Create team** at the bottom of the left-hand panel.
3. Select the team from the left-hand panel, select **... (more options)** and then select **View Team**.  (Note: you must be the team owner, or on a team where the owner has allowed members to sideload.)
4. Select the **Bots** tab, and then select **Sideload a bot or tab** on the lower right.
5. Navigate to the zip file and select it.
6. Go to any channel in the team.  Click the '+' to the right of the existing tabs.
7. Select your tab from the gallery that appears.
8. Accept the consent prompt.
9. Select the type of map you want, and click Save.

## Adapt the app yourself

This sample works because its [configuration page](https://msdn.microsoft.com/en-us/microsoft-teams/createconfigpage) and [removal options page](https://msdn.microsoft.com/en-us/microsoft-teams/updateremove#removing-a-tab) are already hosted in Azure at `https://teams-get-started-sample.azurewebsites.net`. If you want to adapt this sample, you'll need to edit them and host them yourself.

1. Clone the repo
2. [Optional] Make a simple change to the visible text in the `public/tabconfig.html` and `public/tabremove.html` pages. This will help you later to verify your own copy of the tab is running.
3. Host the `tabconfig.html` and `tabremove.html` pages over https (see below for options).
4. Navigate to the `package` directory.
5. Edit `manifest.json`:
    1. Change `id` (in both sections) to your own GUID.  You can use [this tool](https://guidgenerator.com/online-guid-generator.aspx) to create a new one.
    2. Change `configUrl` to the new address of the `tabconfig.html` page from step 3.
    3. [Optional] Change `accentColor` to some color other than the default. This will help you later to verify your own copy of the tab is running.
6. [Optional] Make a simple change to `maps44.png` and `maps88.png` in an image editor. This will help you later to verify your own copy of the tab is running.
7. Zip up `manifest.json`, `maps44.png`, `maps88.png` into a new tab app package called `NewTab.zip`.  Note: icons must be < 1.5k in size.
8. Upload and test your new tab package, `NewTab.zip`, using the [instructions above](#run-the-app).

> **Note:** To re-upload an updated package, with the same `id`, click the 'Replace' icon at the end of the tab's table row.  Don't click 'Upload' again: Microsoft Teams will say the tab already exists.

## Host tab pages over https

In order to protect customer data, Microsoft Teams requires all tab pages and content to be served over https. If you already have a preferred method for doing this then feel free to skip this section. Otherwise, here are a few options to get you started.

### Using Azure or another cloud computing service

1. Create an Azure web app:
    1. If you already have an Azure account then create a web app and enable git deployment following these [instructions](https://azure.microsoft.com/documentation/articles/app-service-deploy-local-git).
    2. Otherwise, create a [trial web app](https://tryappservice.azure.com/?language=NodeJS) using the Node Starter template.
2. Copy the git url that Azure provides you with for deploying your web app.
3. Fork the microsoft-teams-sample-get-started repo and clone the fork to your local machine.
4. Navigate to the root of the forked repo.
5. Create a deployment branch and install all production dependencies:
    1. `git checkout -b deployment`
    2. `npm install --production`
    3. `git rm .gitignore`
    4. `git add .`
    5. `git commit -m "Prepare for first deployment"`
6. Push the deployment branch to Azure:
    1. `git remote add azure <git-deployment-url-from-step-2>`
    2. `git push azure deployment:master`
7. [Optional] Clean up your deployment branch
    1. `git checkout master`
    2. `git branch -D deployment`
8. Use the https URL for your Azure web app as the origin of the `tabconfig.html` page in step 5 [above](#adapt-the-app-yourself).

### Using ngrok

1. Install [node.js](https://nodejs.org) if you don't already have it.
2. Navigate to the repo root and run:
    1. `npm install`
    2. `npm run start-ngrok`
3. Use the https URL displayed on the command line as the origin of the `tabconfig.html` page in step 5 [above](#adapt-the-app-yourself). It should look something like `https://<partial-guid>.ngrok.io/tabconfig.html`.

### Using a self-signed SSL certificate (Mac only)

1. Install [node.js](https://nodejs.org) if you don't already have it.
2. Navigate to the repo root.
3. [One-time] Generate a self-signed SSL certificate and trust it:
    1. `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -subj '/CN=localhost' -nodes`
    2. `sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain cert.pem`
4. Run the following commands to start the server:
    1. `npm install`
    2. `npm run start-ssl`
5. Use the https URL displayed on the command line as the origin of the `tabconfig.html` page in step 5 [above](#adapt-the-app-yourself). It will look something like `https://localhost:3443/tabconfig.html`.

### Using IIS (Windows only)

[Set up an IIS website](https://support.microsoft.com/en-us/kb/323972)


## Copyright
Copyright (c) 2017 Microsoft Corporation. All rights reserved.


This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
