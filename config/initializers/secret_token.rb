# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
if Rails.env.development? or Rails.env.test?
  Blog::Application.config.secret_key_base = 'b5507dfb5bdb6fbb6cc8b64ff8383471720b032b207e8f895c92d58b030bceb5d6f2240a0ee69a6ef56f5fda2a721cb131d2c0aac4fba207a02df5b770f4e93a'
end