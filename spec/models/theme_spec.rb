# == Schema Information
#
# Table name: themes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

describe Theme do
  it { should validate_presence_of :name }
  it { should validate_uniqueness_of :name }
  it { should have_and_belong_to_many(:sources) }
end