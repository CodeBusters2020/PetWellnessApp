require 'rails_helper'
RSpec.describe "Pets", type: :request do
    it "gets a list of Pets" do
        # Create a new cat in the Test Database (this is not the same one as development)
        Pet.create(name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Female', user_id: 1)
        # Make a request to the API
        get '/pets'
        # Convert the response into a Ruby Hash
        json = JSON.parse(response.body)
        # Assure that we got a successful response
        expect(response).to have_http_status(:ok)
        # Assure that we got one result back as expected
        expect(json.length).to eq 1
    end
    it "creates a pet" do
        # The params we are going to send with the request
        cat_params = {
            pet: {
                name: 'Buster', 
                dob: Date.new(2008, 10, 19), 
                breed: 'dragon', 
                sex: 'Female', 
                user_id: 1
            }
        }
        # Send the request to the server
        post '/pets', params: cat_params
        # Assure that we get a success back
        expect(response).to have_http_status(:ok)
        # Look up the cat we expect to be created in the Database
        pet = Pet.first
        # Assure that the created cat has the correct attributes
        expect(pet.name).to eq 'Buster'
    end
    it "doesn't create a cat without a name" do
        pet_params = {
            pet: {
                dob: Date.new(2008, 10, 19), 
                breed: 'dragon', 
                sex: 'Female', 
                user_id: 1
            }
        }
        # Send the request to the  server
        post '/pets', params: pet_params
        # expect an error if the cat_params does not have a name
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['name']).to include "can't be blank"
    end
    it "doesn't create a pet without a dob" do
        pet_params = {
            pet: {
                name: "Buster",
                breed: 'dragon', 
                sex: 'Female', 
                user_id: 1
            }
        }
        # Send the request to the  server
        post '/pets', params: pet_params
        # expect an error if the cat_params does not have a name
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['dob']).to include "can't be blank"
    end
    it "doesn't create a pet without a breed" do
        cat_params = {
            cat: {
                name: "Buster",
                dob: Date.new(2008, 10, 19), 
                sex: 'Female', 
                user_id: 1
            }
        }
        # Send the request to the  server
        post '/pets', params: pet_params
        # expect an error if the cat_params does not have a name
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['breed']).to include "can't be blank"
    end
    it "doesn't create a pet without a sex" do
        pet_params = {
            pet: {
                name: "Buster",
                dob: Date.new(2008, 10, 19), 
                breed: 'dragon', 
                user_id: 1
            }
        }
        # Send the request to the  server
        post '/pets', params: pet_params
        # expect an error if the cat_params does not have a name
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['sex']).to include "can't be blank"
    end
    it "doesn't create a cat without a user_id" do
        pet_params = {
            pet: {
                name: "Buster",
                dob: Date.new(2008, 10, 19), 
                breed: 'dragon', 
                sex: 'Female', 
            }
        }
        # Send the request to the  server
        post '/pets', params: pet_params
        # expect an error if the cat_params does not have a name
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['user_id']).to include "can't be blank"
    end
    # update test
        it "updates a pet" do
            # The params we are going to send with the request
            pet_params = {
            pet: {
                name: "Buster",
                dob: Date.new(2008, 10, 19), 
                breed: 'dragon', 
                sex: 'Female', 
                user_id: 1
            }
            }
            # Send the request to the server
            put '/pets/:id', params: pet_params
            # Assure that we get a success back
            expect(response).to have_http_status(:ok)
            # Look up the cat we expect to be created in the Database
            pet = Pet.first
            # Assure that the created cat has the correct attributes
            expect(pet.fname).to eq 'Buster'
        end
    end