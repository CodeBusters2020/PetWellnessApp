class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.date :dob
      t.string :breed
      t.text :medical
      t.text :digestion
      t.text :appointment
      t.text :diary
      t.text :misc
      t.integer :user_id

      t.timestamps
    end
  end
end
