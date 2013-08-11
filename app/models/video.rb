class Video < ActiveRecord::Base
	attr_accessible :title, :image, :link,  :watched
	validates_uniqueness_of :link
end
