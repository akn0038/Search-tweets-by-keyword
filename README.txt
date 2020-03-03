############ SEARCH TWEET BY KEYWORD #############


###### Requirements
      1.  node
          to install node run command    sudo apt-get install nodejs

      2.  npm
          to install node run command    sudo apt-get install npm

      3.  mongodb
          to install node run command    sudo apt-get install mongodb

###### go to twitter folder
      1.  cd twitter 
      2.  insatll dependencies (if needed , beacuse i have already installed all required dependencies in node_modules)
      

####### Create local MongoDB database called **react-tweets** (configured in `server.js`)
    step 1  run command      mongo
    step 2  run              use react-tweets
    step 2  run              exit

####### I have provided credentials for Twitter API (configured in `config.js`). you can replace that from config.js

####### Start the app: `node server`

####### View in browser at: `http://localhost:3000`


####### NOTE
      1.  if no tweets or previous searched tweets found after serch then please refresh the page , sometimes this happen beacuse of 
          late response from twitter and local database.

      2.  if the app is crashed after some get/post requests and show error code 420 in console then please restart 
          app. this happen because of my twitter credentials is of student which is rate limited for making too many requests. 
          visit this site for more details.
          https://developer.twitter.com/en/docs/basics/response-codes

      3.  screenshots are in screenshot folder.


########### THANKS FOR YOUR TIME ################

############# WAITING FOR POSITIVE RESPONSE ############
       
