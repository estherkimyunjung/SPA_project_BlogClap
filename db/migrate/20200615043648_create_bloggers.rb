class CreateBloggers < ActiveRecord::Migration[6.0]
  def change
    create_table :bloggers do |t|
      t.string :name

      t.timestamps
    end
  end
end
