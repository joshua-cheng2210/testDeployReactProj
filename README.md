# my Vite + React proj - testDeployReactProj
## project details and purpose
- to learn how to host a simple website (through git hub using 1) gh pages and 2) git hub action)

## project demo (in img or vid or url)
- https://joshua-cheng2210.github.io/testDeployReactProj/

## Usage and Installation (to download the code)
'''bash
git clone https://github.com/joshua-cheng2210/testDeployReactProj.git
cd testDeployReactProj
npm install
npm run dev
npm run deploy
'''

## Packages used
- vite --> for real time development of the game
- react --> for scalable front end development (it's like utilizing OOP)

## Topics learnt
- how these files works and what some of the important configurations meant:
    - yml files
    - vite.config.js
    - package.json
- git hub action --> helps automate developmet processes like running tests and deploying
- the google chrome browser only host static websites, but if you're website is dynamic, you need a backend language (normally javascript) to get the information (complicated static website also normally uses a backend language to build the front end)
- the google chrome browser don't load .jsx website.it is dependent on your vite to compile and transform the .jsx to .js for the browser to run

### thought ptocesses on debugging
1)  i really had to be calm and identify where the problem was coming from. I can't keep spamming the problem to the AI (the problem was that i could launch the webite but the website is just showing a blank white page and not loading anything)
2) at first, i thought it was because of my .yml file. but then if i was able to launch the website, it meant my .yml file had sucessfully launched the website, leading my to figure out what else was the problem
3) i then realize i can open the console on my browser to try to see what more information i can find about my launched website
4) there was a warning stated on my brwoser. it was not able to compile the files directions properly after running npm run build
5) i then proceeded to figure out and learn how the .js, .jsx, .html and .css all get compiled together through the npm run build command. 
    - so i learnt that the "npm run build" command is defined in the package.json file (under the "scripts" section). and that it is actually a command that calls another command call "vite build"
    - i then somehow learnt that some customizations of vite is written under the vite.config.js file
    - i then investigated the file and realize that there is an option to customize your base directory to launch your project file from

### steps to deploy your website
things to have in these files
- vite.config.js
    - base: '/<project_folder_or_repo_name>/',
    - plugins: [react(), or other frameworks], ... build: {} <!-- remember the put these outside of build key:value -->
- package.json
    - "homepage" : "<git hub link to hosting the proj demo (can be found in the settings under the pages tab)>"
    - "scripts": {... scripts, 
    "deploy": "npm run build && gh-pages -d dist"}
    - devDependencies: {... devDependencies,
    ""gh-pages": "^6.3.0"}
- no go to your git hub repo settings on your browser
    1) go to the pages tab
    2) click "source" and make sure it is "Deploy from a branch" <!-- this settings allows you to automatically deploy from the gh-pges branch -->
    3) go down to the branch section. choose "gh-pages" and "/root" and click save
- go to your project on your IDE and open a terminal and run the command. "npm run deploy"


## Mistakes made that got me debugging 24 hours
- in my vite.config.js, I put my base: '/testDeployReactProj/', plugins: [react()], inside the build: {} object. --> I realized this was the problem when i was able to launch the website but the website isn't able to load other directories appropriately from its root


## how to tweak this project for your own uses (for collaborative developers)
- additional features can be added to the game

## Find a bug?

## Known Issues

## go Fund me Coffee

## contacts
- name: Joshua Hor Soong, Cheng
- email: chengjoshua22@gmail.com, chen7647@umn.edu
- git hub: github.com/joshua-cheng2210
- portfolio: 
- linkedin: linkedin.com/in/joshua-cheng2210
- goFundme some coffee: 
