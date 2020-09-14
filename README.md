# README

## SETUP

After cloning the repo:

If your yarn packages are out of date run:
* $yarn install --check-files

* Request an API key from: https://rescuegroups.org/services/request-an-api-key/

* Add API Key to credentials using $EDITOR="vi" bin/rails credentials:edit

* Add to views/Home/index.html.erb:
  Rails.application.credentials.api_keys[:adopt_a_pet] 

* Create a master key and add it to your config file

* $bundle install

* $rails db:create

* $rails db:migrate

* $rails s

* navigate to localhost:3000
