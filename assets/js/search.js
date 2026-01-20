// Simple client-side search functionality
(function() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  let searchData = [];
  
  // Build search index from page content
  function buildSearchIndex() {
    // In a real implementation, this would fetch a JSON index
    // For now, we'll search through visible content
    const cards = document.querySelectorAll('.card');
    searchData = Array.from(cards).map(card => ({
      element: card,
      text: card.textContent.toLowerCase()
    }));
  }
  
  // Perform search
  function performSearch(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    if (lowerQuery === '') {
      searchData.forEach(item => {
        item.element.style.display = '';
      });
      return;
    }
    
    searchData.forEach(item => {
      if (item.text.includes(lowerQuery)) {
        item.element.style.display = '';
      } else {
        item.element.style.display = 'none';
      }
    });
  }
  
  // Initialize
  buildSearchIndex();
  
  // Debounce search input
  let searchTimeout;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(this.value);
    }, 300);
  });
})();
