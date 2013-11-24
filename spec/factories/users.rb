FactoryGirl.define do
  factory :user do
    email     { Faker::Internet.email }
    password  { Faker::Internet.password }
    password_confirmation { |u| u.password }
    role      { create(:role_admin) }
  end
end