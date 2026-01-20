// Tag filtering with autocomplete
(function() {
  const tagFilterInput = document.getElementById('tag-filter-input');
  if (!tagFilterInput) return;
  
  const availableTagsContainer = document.getElementById('available-tags');
  const selectedTagsContainer = document.getElementById('selected-tags');
  
  let allTags = new Set();
  let selectedTags = new Set();
  
  // Extract all tags from the page
  function extractTags() {
    const tagElements = document.querySelectorAll('.tag');
    tagElements.forEach(tag => {
      allTags.add(tag.textContent.trim());
    });
    renderAvailableTags();
  }
  
  // Render available tags
  function renderAvailableTags(filter = '') {
    availableTagsContainer.innerHTML = '';
    const lowerFilter = filter.toLowerCase();
    
    Array.from(allTags)
      .filter(tag => !selectedTags.has(tag))
      .filter(tag => tag.toLowerCase().includes(lowerFilter))
      .slice(0, 10) // Limit to 10 suggestions
      .forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        tagEl.style.cursor = 'pointer';
        tagEl.addEventListener('click', () => selectTag(tag));
        availableTagsContainer.appendChild(tagEl);
      });
  }
  
  // Select a tag
  function selectTag(tag) {
    selectedTags.add(tag);
    renderSelectedTags();
    renderAvailableTags();
    filterContent();
  }
  
  // Deselect a tag
  function deselectTag(tag) {
    selectedTags.delete(tag);
    renderSelectedTags();
    renderAvailableTags();
    filterContent();
  }
  
  // Render selected tags
  function renderSelectedTags() {
    selectedTagsContainer.innerHTML = '';
    Array.from(selectedTags).forEach(tag => {
      const tagEl = document.createElement('span');
      tagEl.className = 'tag';
      tagEl.textContent = tag + ' ×';
      tagEl.style.cursor = 'pointer';
      tagEl.addEventListener('click', () => deselectTag(tag));
      selectedTagsContainer.appendChild(tagEl);
    });
  }
  
  // Filter content based on selected tags
  function filterContent() {
    if (selectedTags.size === 0) {
      // Show all content
      document.querySelectorAll('.card').forEach(card => {
        card.style.display = '';
      });
      return;
    }
    
    // Filter cards
    document.querySelectorAll('.card').forEach(card => {
      const cardTags = Array.from(card.querySelectorAll('.tag'))
        .map(tag => tag.textContent.trim());
      
      const hasAnyTag = Array.from(selectedTags).some(selectedTag => 
        cardTags.includes(selectedTag)
      );
      
      card.style.display = hasAnyTag ? '' : 'none';
    });
  }
  
  // Initialize
  extractTags();
  
  // Input event for autocomplete
  tagFilterInput.addEventListener('input', function() {
    renderAvailableTags(this.value);
  });
  
  // Read tags from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const tagParam = urlParams.get('tag');
  if (tagParam && allTags.has(tagParam)) {
    selectTag(tagParam);
  }
})();
