class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :email
      t.text :name
      t.string :password_digest
      t.integer :resevation_id
      t.boolean :is_admin

      t.timestamps
    end
  end
end
