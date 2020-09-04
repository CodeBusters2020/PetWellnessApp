class AddingSexToPetsModel < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :sex, :string
  end
end
