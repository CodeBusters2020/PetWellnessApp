class SendPetMailer < ApplicationMailer
    default from: 'CodeBusters2020@gmail.com'

  def send_pet(email, user, pet)
    @email = email
    @pet = pet
    @user = user
    mail(to: @email, subject: 'Someone has shared their pet with you!')
  end
end