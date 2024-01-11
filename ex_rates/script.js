// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function() {
    // Initialize tooltips on hover
    $('[data-bs-toggl="tooltip"]').tooltip({
      trigger: 'hover'
    });

    // Remove tooltips on click
    $('[data-bs-toggl="tooltip"]').on('click', function() {
      $(this).tooltip('hide');
    });


    $('input[type="checkbox"]').change(function () {
      // Get the class related to the checkbox
      var className = $(this).attr('class');
      console.log(className);
      // Toggle the visibility of elements with the same class
      $('.' + className).toggle(this.checked);
    });
    


    // Handle change event of the dropdown
    var avgRate = document.querySelectorAll('#avgRate');
var closeRate = document.querySelectorAll('#closeRate');
var both = document.querySelectorAll('#closeRate, #avgRate');


// filter for rateSelection
$(".rateSelection").change(function () {
  var selectedValue = $(this).val();

  if (selectedValue === "1") {
    closeRate.forEach(function(element) {
      element.style.visibility = 'hidden';
    });

    avgRate.forEach(function(element) {
      element.style.visibility = 'visible';
    });
  } else if (selectedValue === "2") {
    avgRate.forEach(function(element) {
      element.style.visibility = 'hidden';
    });

    closeRate.forEach(function(element) {
      element.style.visibility = 'visible';
    });
  } else if (selectedValue === "3") {
    both.forEach(function(element) {
      element.style.visibility = 'visible';
    });
  }
});

// filter for dates


  });