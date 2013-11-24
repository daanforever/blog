class Settings < ActiveRecord::Base

  def self.method_missing(name, *args, &block)
    super
  rescue NoMethodError
    if name =~ /=$/
      key_name = name.to_s.gsub('=', '')
      if record = find_by(key: key_name)
        record.update(value: args.first)
      else
        create(key: key_name, value: args.first)
      end
    else
      Settings.find_by(key: name).value
    end
  end

end
