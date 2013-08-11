require 'spec_helper'

describe Video do 
	it "should not allow dublicates" do
		@video1 = Video.create(link: "steven.com")
		@video2 = Video.create(link: "steven.com")
		Video.count.should == 1
			
	end
end