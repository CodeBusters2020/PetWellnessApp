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
    sex: "female",
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
  },
  {
    name: "Titi",
    dob: Date.new(2019, 11, 10),
    breed: "Siamese Cat",
    sex: "male",
    medical: "Allergies: Avocado.
    Veterinarian: Doctor Jane.
    Medications: nil.
    Weight: 10 pounds",
    digestion: "Feed: chicken
    Amount: 1 cup twice a day
    Feeding time: 10 a.m and 7p.m.
    BM times: Usually right after breakfast.",
    appointment: "Groomer: 12 p.m with Larry at Petco in La Mesa",
    diary: "Jimmy played fetch for 20 minutes today.
    Jimmy loves going to the cat park in Ocean Beach",
    misc: "Jimmy REALLY loves peanut butter so make sure to lock it away when you leave."
  },
  {
    name: "Nelly",
    dob: Date.new(2017, 12, 10),
    breed: "Parakeet",
    sex: "male",
    medical: "Allergies: mold.
    Veterinarian: Doctor Bill.
    Medications: nil.
    Weight: 2 pounds",
    digestion: "Feed: grains
    Amount: 1 cup a day
    Feeding time: 10 a.m and 7p.m.
    BM times: Usually right after breakfast.",
    appointment: "Sarah will come in on Monday, sept. 7th to feed Nelly",
    diary: "Nelly tried to escape and hurt his right wing",
    misc: "Nelly REALLY loves peanut butter so make sure to lock it away when you leave."
  }
]
test_user = User.first
pets.each do |attribute|
  test_user.pets.create attribute
end

user2 = [
  {
    email: "jakob@test.com",
    password: "123456",
    username: "Jakob",
    password_confirmation: "123456"
  }
]

puts 'users loaded'

user2.each do |attribute|
  User.create attribute
end

pets2 = [
    {
    name: "Ruh-ruh",
    dob: Date.new(2012, 07, 03),
    breed: "Turtle",
    sex: "male",
    medical: "Allergies: dairy.
    Veterinarian: Mister Carter.
    Medications: water.
    Weight: 5 pounds",
    digestion: "Feed: peas and yams. 
    Amount: 2x bowl a day. 
    Feeding time: 10 a.m and 7p.m.
    BM times: Once a week",
    appointment: "Ruh-ruh has a nail painting appointment this Friday.",
    diary: "Ruh-ruh sat in a sunny spot for 4 hours today.",
    misc: "Ruh-ruh REALLY loves cheesecake so make sure to lock it away when you leave."
  }
]

puts 'pets loaded'

test_user2 = User.last
pets2.each do |attribute|
test_user2.pets.create attribute
end