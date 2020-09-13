require 'rails_helper'

RSpec.describe Pet, type: :model do
  it "should validate presence of name" do
    pet = Pet.create dob: Date.new(2008, 10, 19), sex: 'Female', breed: 'dragon', user_id: 1
    expect(pet.errors[:name]).to_not be_empty
  end
  it "should validate presence of dob" do
    pet = Pet.create name: 'Buster', sex: 'Female', breed: 'dragon', user_id: 1
    expect(pet.errors[:dob]).to_not be_empty
  end
  it "should validate presence of breed" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), sex: 'Female', user_id: 1
    expect(pet.errors[:breed]).to_not be_empty
  end
  it "should validate presence of sex" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', user_id: 1
    expect(pet.errors[:sex]).to_not be_empty
  end
  it "should validate presence of user_id" do
    pet = Pet.create name: 'Buster', Date.new(2008, 10, 19), breed: 'dragon', sex: 'Male'
    expect(pet.errors[:user_id]).to_not be_empty
  end
  it "dob should be a type date" do
    pet = Pet.create name: 'Buster', dob: 'this is a string', breed: 'dragon', sex: 'Male', user_id: 1
    expect(pet.errors[:dob]).to_not be_empty
  end


# Update test
  it "should not update a pet without a name" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Female', user_id: 1
    pet.update(name: '')
    expect(pet.errors[:name]).to_not be_empty
  end
  it "should not update a pet without a dob" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Female', user_id: 1
    pet.update(dob: '')
    expect(pet.errors[:dob]).to_not be_empty
  end
  it "should not update a pet without breed" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Female', user_id: 1
    pet.update(breed: '')
    expect(pet.errors[:breed]).to_not be_empty
  end
  it "should not update a pet without sex" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Female', user_id: 1
    pet.update(sex: '')
    expect(pet.errors[:sex]).to_not be_empty
  end
  it "should not update dob without date" do
    pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Male', user_id: 1
    pet.update(dob: 'string')
    expect(pet.errors[:dob]).to_not be_empty
  end

  # Delete tests
  it "should destroy a user" do
    pet = Pet.create name: 'Buster', dob: 'this is a string', breed: 'dragon', sex: 'Male', user_id: 1
    pet.destroy
    expect(Pet.find_by(id: pet.id)).to be_nil
  end

  # Show tests
#   it "should show a pet" do
#   pet = Pet.create name: 'Buster', dob: Date.new(2008, 10, 19), breed: 'dragon', sex: 'Female', user_id: 1
#   expect(Pet.all).to respond_with 200
#   end
end