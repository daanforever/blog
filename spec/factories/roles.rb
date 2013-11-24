FactoryGirl.define do
  factory :role do
    name        :user
    title       "role for user"
    description "this user can do nothing"
  end

  factory :role_admin, parent: :role do
    name        :admin
    title       "role for admin"
    description "this user can do anything"

    after(:create) do |role|
      role.create_rule(:system, :administrator)
      role.rule_on(:system, :administrator)
    end
  end
end