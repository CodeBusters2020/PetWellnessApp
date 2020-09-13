require 'rails_helper'

RSpec.describe User, type: :model do
  it "should validate presence of username" do
    user = User.create email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    expect(pet.errors[:name]).to_not be_empty
  end
  it "should validate presence of email" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    expect(user.errors[:dob]).to_not be_empty
  end
  it "should validate presence of password" do
    user = User.create username: "ryank", email: "ryank@test.com", password_confirmation: "test123"
    expect(user.errors[:breed]).to_not be_empty
  end
  it "should validate presence of password confirmation" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123"
    expect(user.errors[:sex]).to_not be_empty
  end


# Update test
  it "should not update a pet without a username" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    user.update(username: '')
    expect(user.errors[:username]).to_not be_empty
  end
  it "should not update a pet without an email" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    user.update(email: '')
    expect(user.errors[:email]).to_not be_empty
  end
  it "should not update a pet without a password" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    user.update(password: '')
    expect(user.errors[:password]).to_not be_empty
  end
  it "should not update a pet without a password confirmation" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    user.update(password_confirmation: '')
    expect(user.errors[:password_confirmation]).to_not be_empty
  end

  # Delete tests
  it "should destroy a user" do
    user = User.create username: "ryank", email: "ryank@test.com", password: "test123", password_confirmation: "test123"
    user.destroy
    expect(User.find_by(id: user.id)).to be_nil
  end
end
