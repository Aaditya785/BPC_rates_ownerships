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
  });




//   $(document).ready(function() {
//     $('.rateSelection').change(function() {
//         var selectedValue = $(this).val();
//         showSelectedRate(selectedValue);
//     });

//     function showSelectedRate(rateType) {
//         console.log("rate type : ", rateType);
//         if (rateType == 1) {
//             $("#avgRate").hide();
//             $("#closeRate").show();

//             // Show only the corresponding columns
//             $('td[data-rate-type="1"]').show();
//             $('td[data-rate-type="2"]').hide();
//         } else if (rateType == 2) {
//             $("#avgRate").show();
//             $("#closeRate").hide();

//             // Show only the corresponding columns
//             $('td[data-rate-type="1"]').hide();
//             $('td[data-rate-type="2"]').show();
//         } else {
//             $("#avgRate").show();
//             $("#closeRate").show();

//             // Show all columns
//             $('td[data-rate-type]').show();
//         }
//     }
// });



//   $(document).ready(function() {
//     $('.rateSelection').change(function() {
//       var selectedValue = $(this).val();
//       showSelectedRate(selectedValue);
//     });

//     function showSelectedRate(rateType) {
//         console.log("rate type : ",rateType);
//         if(rateType == 1){
//             $("avgRate"]').hide(); // Hide all rate columns
//             // Show the selected rate column
//             $('th[id="rate"]:contains(' + rateType + ')').show();
            
//             // Show only the corresponding rows
//             $('tbody tr').each(function() {
//                 var currency = $(this).find('td:first').text().toLowerCase();
//                 if (currency.includes(rateType)) {
//                     $(this).show();
//                 } else {
//                     $(this).hide();
//                 }
//             });
//         }
//         else if(rateType == 2){
//             $('th[id="closeRate"]').hide(); // Hide all rate columns
//             // Show the selected rate column
//             $('th[id="rate"]:contains(' + rateType + ')').show();
            
//             // Show only the corresponding rows
//             $('tbody tr').each(function() {
//                 var currency = $(this).find('td:first').text().toLowerCase();
//                 if (currency.includes(rateType)) {
//                     $(this).show();
//                 } else {
//                     $(this).hide();
//                 }
//             });
//         }
//         else{
//             $('th[id="closeRate"]').show(); 
//             $('th[id="avgRate"]').show(); 
//         }
//     }
//   });