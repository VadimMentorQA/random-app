# Clone the project

git clone https://github.com/VadimMentorQA/random-app.git

# Navigate to the project directory

cd random-app

# Install dependencies

npm install

# Install newman

npm install -g newman

# Launch the project locally

npm run start

# Open the project in browser

http://localhost:3000/

# Stop the project by shortcut:

Ctrl + C

# Run the unit tests

npm run test

# Run the API tests using newman 

newman run https://api.postman.com/collections/32807344-597af11e-c8fa-4bb0-a62e-d1fe83421dd8?access_key=PMAT-01HR9V2KGKWA4AYQCGZHQT4WP8

# Run the e2e tests in UI mode

npx cypress open

# Run the e2e tests in headless mode

npx cypress run
