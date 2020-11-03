json.extract! user, :id, :email, :name, :password_digest, :resevation_id, :is_admin, :created_at, :updated_at
json.url user_url(user, format: :json)
