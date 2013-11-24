class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.string :key
      t.string :value

      t.timestamps
    end

    reversible do |dir|
      dir.up do
        Settings.create(key: 'allowed_tags', value: 'b p i strong small big em ul li tbody table tr td br')
        Settings.create(key: 'allowed_attr', value: 'style id')
      end
    end
  end
end
