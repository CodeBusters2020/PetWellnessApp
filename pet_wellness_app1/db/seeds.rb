# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = [
  {
    email: "test@test.com",
    password: "123456",
    username: "Dan",
    password_confirmation: "123456"
  }
]

user.each do |attribute|
  User.create attribute
end

pets = [
  {
    name: "Kevin",
    dob: Date.new(2017, 11, 10),
    breed: "French Bulldog",
    medical: "Allergies: pollen and peanut butter.
    Veterinarian: Doctor Smith.
    Medications: Bravecto.
    Weight: 30 pounds",
    digestion: "Feed: Blue Buffalo standard
    Amount: 1 cup twice a day
    Feeding time: 10 a.m and 7p.m.
    BM times: Usually right after breakfast.",
    appointment: "Groomer: 12 p.m with Sarah at Petco in La Mesa",
    diary: "Kevin played fetch for 20 minutes today.
    Kevin loves going to the dog park in Ocean Beach",
    misc: "Kevin REALLY loves peanut butter so make sure to lock it away when you leave."
  }
]

test_user = User.first

pets.each do |attribute|
  test_user.pets.create attribute
end
