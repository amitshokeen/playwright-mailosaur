# playwright-mailosaur
Automated Email Testing with Playwright and Mailosaur
* Use this VSCode Extension: "Playwright Test for VSCode"
* Command panel: "Test: Install Playwright"
* Select the browsers and "GitHub Actions workflow" as well
* Sign-up/sign-in to mailosaur.com 
* Create an API key in mailosaur and note down the key
* Note the server ID as well
* `npm install mailosaur`
* Import the mailosaur library using the API key at the top of your tests
* e.g.`import MailosaurClient from 'mailosaur';
const mailosaur = new MailosaurClient('<api key>');`
* See the sample code in password.spec.ts 

Avoid a hard-coded API Key inside the code
* Save the API key as an environment variable on the system
* Make use of `process.env.mailosaur` as in sample code
* Anyone else who clones this code will need to generate their own API key and save it in their system's environment variable file.
  
How to permanently save API Key in environment variables on Mac?
* Terminal: `vi ~/.zshrc`  
* Add this line: `export mailosaur="<the mailosaur API key goes here>"`
* Save and exit the VI editor
* Reload the ~/.zshrc file to apply the changes to your current session: `source ~/.zshrc`
* `echo $mailosaur`
* If the API key does not load, you may need to restart the terminal.
