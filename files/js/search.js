document.addEventListener('DOMContentLoaded', function () {
    const searchQueryInput = document.getElementById('searchQueryInput');
    const searchResults = document.getElementById('searchResults');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const clearSearch = document.getElementById('clearSearch');
  
    searchQueryInput.addEventListener('input', function () {
      const searchTerm = searchQueryInput.value.toLowerCase();
      const results = document.querySelectorAll('.content section');
      const matchedResults = [];
  
      results.forEach((result) => {
        const resultText = result.textContent.toLowerCase();
        if (resultText.includes(searchTerm)) {
          matchedResults.push(result);
        }
      });
  
      displayResults(matchedResults);
      toggleClearIcon();
    });
  
    clearSearch.addEventListener('click', function () {
      searchQueryInput.value = '';
      searchResults.innerHTML = '';
      hideNoResultsMessage();
      clearHighlights();
      toggleClearIcon();
    });
  
    function displayResults(results) {
      searchResults.innerHTML = '';
  
      if (results.length === 0) {
        showNoResultsMessage();
      } else {
        hideNoResultsMessage();
        results.forEach((result) => {
          const listItem = document.createElement('li');
          listItem.textContent = result.querySelector('h4').textContent;
          listItem.addEventListener('click', function () {
            scrollToResult(result);
          });
          searchResults.appendChild(listItem);
        });
      }
    }
  
    function showNoResultsMessage() {
      noResultsMessage.style.display = 'block';
    }
  
    function hideNoResultsMessage() {
      noResultsMessage.style.display = 'none';
    }
  
    function scrollToResult(result) {
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
      clearHighlights();
      highlightResult(result);
    }
  
    function highlightResult(result) {
      const searchTerm = searchQueryInput.value.toLowerCase();
      const resultContent = result.querySelector('p').textContent;
      const highlightedContent = resultContent.replace(
        new RegExp(searchTerm, 'gi'),
        (match) => `<span class="highlight">${match}</span>`
      );
  
      result.querySelector('p').innerHTML = highlightedContent;
    }
  
    function clearHighlights() {
      const highlightedText = document.querySelectorAll('.highlight');
      highlightedText.forEach((element) => {
        element.outerHTML = element.innerHTML;
      });
    }
  
    function toggleClearIcon() {
      clearSearch.style.display = searchQueryInput.value ? 'block' : 'none';
    }
  });
  
  function openLinkInIframe(url) {
    // Create a new window and insert an iframe with the specified URL
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      // Change the title of the new window
      newWindow.document.title = "Download Window is here ! ";
    }
    newWindow.document.body.innerHTML = `<iframe src="${url}" width="100%" height="100%" sandbox="allow-scripts"></iframe>`;
  }