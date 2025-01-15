document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("query-search");
  const statusSelector = document.getElementById("status-selector");

  const queryParams = new URLSearchParams(window.location.search);
  const query = queryParams.get("query");
  const status = queryParams.get("status");

  if (query) {
    searchInput.value = query;
  }

  if (status) {
    statusSelector.value = status;
  }
});
