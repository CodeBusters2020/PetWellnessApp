class PetsController < ApplicationController
  def index
    pets = Pet.all
    render json: pets
  end

  def create
    pet = Pet.create(pet_params)
    if pet.valid?
        render json: pet
    else
        render json: pet.errors, status: :unprocessable_entity
    end
  end

    def update
        pet = Pet.find(params[:id])
        pet.update(pet_params)
        if pet.valid?
            render json: pet
        else
            render json: pet.errors
        end
    end
    def destroy
        pet = Pet.find(params[:id])
        if pet.destroy
            render json: pet
        else
            render json: pet.errors
        end
    end
    private
    def pet_params
        params.require(:pet).permit(:name, :dob, :breed, :medical, :digestion, :appointment,:diary, :misc, :sex, :user_id)
    end
end
