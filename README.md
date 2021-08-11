# Btech-Project

This project is done in windows 10 laptop.
This is only the blockchain part of our Project.

Step - 1 : 
  Install NodeJS from "https://nodejs.org/en/"
  install the exact version "v9.10.0"
  If you are not able to get exact version, install "nvm" and then switch to our exact version ( see youtube vides on "how to install nvm" )
  After installation verify the version by opening the command prompt and type "node -v" then press enter.
  
Step - 2 :
  Install Ganache from "https://www.trufflesuite.com/ganache"
  
Step - 3 : 
  Install Truffle framework by opening command prompt and run "npm install -g truffle@5.1.39"
  Ensure that your solidity version is 0.5.0 or above.
  Check the version by opening the command prompt and run "truffle version"
  if solidity version is not correct, edit your solidity code in "https://remix.ethereum.org/" compile, migrate, crosscheck and then paste it in place of our code.
  (/src/contracts/Marketplace.sol ).
  
Step - 5 :
  Install Metamask 
  Search Youtube for "how to install Metamask extension" (its pretty easy)
  
Step - 6 :
  Install any text editor (Iam using Sublime text, I will be telling how to install it, You can use any text editor as u wish like VSCode etc)
  link is "https://www.sublimetext.com/"
  You can install syntax highlighter mainly for solidity code if you like (search you tube )
  
Step - 7: 
  Install ReactJS in your system using command prompt(preferabily)
  Just search Youtube on "How to install ReactJS in Windows".
  
After doing the 7 steps :
  Download our code (i.e the zip file).
  Move the zip file to desktop (just for easy purpose).
  Extract  the zip file. The extracted folder name "may be" : Btech-Project-main 
  Open command Promt: 
    1. cd Desktop
    2. cd Btech-Project-main  (the extracted folder name)
    3. npm install
  Close command prompt  
  Now open sublime text editor (most probably it will be inside your "Windows" button in desktop......or just search)
  Open the extracted folder in sublime text " File -> Open Folder -> Desktop -> Btech-Project-main "
  
  Now open Ganache App (most probably it will be inside your "Windows" button in desktop......or just search)
  Connect Your Metamask with Ganache (Just search in Youtube how to do that) 
  Open command Promt: 
    1. cd Desktop
    2. cd Btech-Project-main  (the extracted folder name)
    3. truffle compile (just make sure solidity code is compiling successfully)
    4. truffle Migrate (Make sure Ganache app is open in background & after migration the transaction count is 4)
    5. npm run start : give 1 min your blockchain app will open in browser.
    
    
  That's it   
  If you come across any error during your work watch "https://youtu.be/VH9Q2lf2mNo". it is a good tutorial.
  
  Drive: https://drive.google.com/drive/folders/1HEbUtpIxE5iy2UBrbxbRKgu8K2-RWuIr?usp=sharing
