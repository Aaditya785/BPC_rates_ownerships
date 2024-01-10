$(document).ready(function() {
    // Initialize tooltips on hover
    $('[data-bs-toggl="tooltip"]').tooltip({
      trigger: 'hover'
    });

    // Remove tooltips on click
    $('[data-bs-toggl="tooltip"]').on('click', function() {
      $(this).tooltip('hide');
    });
  });


function selectCategory(category) {
    document.querySelector('.btn-secondary').textContent = category;
  }