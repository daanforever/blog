# This migration comes from the_role_engine (originally 20111025025129)
class CreateRoles < ActiveRecord::Migration
  def self.up
    create_table :roles do |t|

      t.string :name,        :null => false
      t.string :title,       :null => false
      t.text   :description, :null => false
      t.text   :the_role,    :null => false

      t.timestamps
    end

    unless Role.with_name(:admin)
      role = Role.create(
        name: :admin,
        title: "role for admin",
        description:"this user can do anything"
      )

      role.create_rule(:system, :administrator)
      role.rule_on(:system, :administrator)

      say "Admin role created"
    else
      say "Admin role exists"
    end
  end

  def self.down
    drop_table :roles
  end
end