One Million more campaign.
This is a simple implementation to run tests for the one more million Campaign.

--- Environment preps.---
Clone/ unzip the project.
Ensure node js is installed in your local machine.
Now go to the directory of this project and run npm install – this will install all the dependences in package.json file.

How to execute the tests.
1. Using selenium grid with kubernetes
2. Creating a docker Image and running the image to do the tests
3. Run directly on the local machine.
4. Reporting Our results.

1. Using selenium grid with kubernetes.

First set up the kubernetes and selenium grid architecture by :
1.Going into the kubernetes folder
– cd ./ kubernetes
2. Create the selenium hub for running the test on the web driver nodes.
- 'kubectl create -f deploy_selenium_hub.yml'
3. Create the kubernetes service used for communicating between the hub and the nodes
- 'kubectl create -f kub_service.yml'
4. Create the webdriver node you want either firefox or chrome.
- 'kubectl create -f firefox_node.yml/chrome_node.yml'
5. In the wdio.conf.js file ensure under services docker is not commented out.
--And under capabilities chrome options (headless) are not commented out.
– Specify the hostname, port, path and protocal, they can be seen by running 'kubectl describe service'
Run the test but running npm run tests.  

2. Create the Docker Image
In project folder open the terminal and run 'docker build -t wdiodemo:v1' –this will create a docker image with the file and folders of the project .
Then run 'docker run -it wdiodemo:v1' – this will run the created docker image and execute our tests

3. Run on the local Machine.
- In the wdio.conf.js file ensure under services chromedriver is not commented out.
- In the terminal run npm run test


4. Reporting
 in the terminal run 'allure generate && allure open'.
