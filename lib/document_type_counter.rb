class DocumentTypeCounter
  extend HashUtils

  def self.topic_counts
    roots = DocumentType.roots.select(:id, :name)
    topics = Topic.select(:id, :name)
    {
      topics: topics,
      document_types: roots,
      counts: topics.map do |t|
        roots.map do |d|
          t.documents.published
            .where(document_type: d.self_and_descendant_ids).count
        end
      end
    }
  end

  def self.theme_counts
    roots = DocumentType.roots.select(:id, :name)
    themes = Theme.select(:id, :name, :archived)
    {
      themes: themes,
      document_types: roots,
      counts: themes.map do |t|
        roots.map do |d|
          t.documents.published
            .where(document_type: d.self_and_descendant_ids).count
        end
      end
    }
  end

  def self.region_counts
    roots = DocumentType.roots.where.not(name: 'Historical Primary Sources').select(:id, :name)
    regions = hash_flatten(Region.hash_tree)
    {
      regions: regions,
      document_types: roots,
      counts: regions.map do |region|
        roots.map do |d|
          region.documents.published
            .where(document_type: d.self_and_descendant_ids).count
        end
      end
    }
  end

  def self.era_counts
    roots = DocumentType.roots.where.not(name: 'Contemporary Primary Sources').select(:id, :name)
    eras = hash_flatten(Era.hash_tree)
    {
      eras: eras,
      document_types: roots,
      counts: eras.map do |era|
        roots.map do |d|
          era.documents.published
            .where(document_type: d.self_and_descendant_ids).count
        end
      end
    }
  end

  def self.contributor_counts
    roots = DocumentType.roots.select(:id, :name)
    contributors = User.where("disabled IS FALSE OR disabled IS NULL").joins("INNER JOIN documents on documents.contributor_id = users.id OR users.is_senior_scholar IS TRUE").distinct
    {
      contributors: contributors,
      document_types: roots,
      counts: contributors.map do |a|
        roots.map do |d|
          a.documents.published
            .where(document_type: d.self_and_descendant_ids).count
        end
      end
    }
  end

  def self.expire_keys
    [
      'document_type_contributor_counts',
      'document_type_era_counts',
      'document_type_region_counts',
      'document_type_theme_counts',
      'document_type_topic_counts'
    ].each {|key| Rails.cache.delete key }
  end
end
