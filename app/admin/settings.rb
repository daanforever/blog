ActiveAdmin.register Settings do



  filter :key
  filter :value

  index do
    column :key
    column :value
    default_actions
  end
end