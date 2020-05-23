class CreateCountries < ActiveRecord::Migration[6.0]
  def change
    create_table :countries do |t|
      t.integer :population
      t.string :name
      t.timestamps
    end
  end
end
