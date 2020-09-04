class PetsController < ApplicationController

  def create
        pet = Pet.create(pet_params)
        if pet.valid?
            render json: pet
        else
            render json: pet.errors, status: :unprocessable_entity
        end
      end

  private
  
  def pet_params
    params.require(:pet).permit(:name, :dob, :sex, :breed, :medical, :digestion, :appointment, :diary, :misc, :user_id)
  end
end
