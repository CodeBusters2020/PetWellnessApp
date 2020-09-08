class Pet < ApplicationRecord
    belongs_to :user
    validates :name, :dob, :sex, :breed, :user_id, presence: true
end
