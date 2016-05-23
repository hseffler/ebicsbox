require 'sequel'

module Box
  class User < Sequel::Model
    self.raise_on_save_failure = true
    self.unrestrict_primary_key

    many_to_one :organization
    one_to_many :subscribers

    def self.find_by_access_token(access_token)
      return unless access_token
      first(access_token: access_token)
    end
  end
end