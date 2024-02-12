// $(document).ready(function () {
//   $("#view-bus").on("click", function () {
//     $("#view-bus-pane").toggle(); // Toggle visibility of the div

//     // Change button text based on the div's visibility
//     var buttonText = $("#myDiv").is(":visible") ? "Hide Div" : "Show Div";
//     $("#view-bus").text(buttonText);
//   });
// });

$("#pickuppoint-location").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#pickuppoint-locationlist span").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

$("#droptpoint-location").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#droptpoint-locationlist span").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

$(document).ready(function () {
  // Use 'change' event for better compatibility with keyboard navigation
  $('input[type="checkbox"]').change(function () {
    // Use prop() instead of attr() for boolean properties like 'checked'
    var inputValue = $(this).val();

    if ($(this).is(":checked")) {
      // Use .hide() and .show() directly on the selected elements
      $(".search-result-info").hide();
      $(`.${inputValue}`).show();
    } else {
      // Show all elements if no checkboxes are checked
      if ($('input[type="checkbox"]:checked').length === 0) {
        $(".search-result-info").show();
      } else {
        // Optionally, you can choose to hide elements associated with unchecked checkboxes
        // Remove the next line if you want to keep elements associated with unchecked checkboxes visible
        $(`.${inputValue}`).hide();
      }
    }
  });
});

// Clear All Filtter

$("#alluncheck").click(function () {
  // Clear data-id attributes for elements with class 'search-result-info'
  $(".search-result-info").removeAttr("data-id");
  $(".fillter-option").removeAttr("data-id");
  $(".fillter-option").hide();

  // Show all elements with class 'search-result-info'
  $(".search-result-info").show();

  // Remove the 'active' class from elements with class 'seattype'
  $(".seattype_1").removeClass("active");
  $(".seattype_2").removeClass("active");

  // Uncheck checkboxes and radios
  $('input[type="checkbox"]').prop("checked", false);
  $('input[type="radio"]').prop("checked", false);
});

// Clear All Filtter on popup

$("#clearall").click(function () {
  // Clear data-id attributes for elements with class 'search-result-info'
  $(".search-result-info").removeAttr("data-id");
  $(".fillter-option").removeAttr("data-id");
  $(".fillter-option").hide();

  // Show all elements with class 'search-result-info'
  $(".search-result-info").show();

  // Remove the 'active' class from elements with class 'seattype'
  $(".seattype_1").removeClass("active");
  $(".seattype_2").removeClass("active");

  // Uncheck checkboxes and radios
  $('input[type="checkbox"]').prop("checked", false);
  $('input[type="radio"]').prop("checked", false);
});

//All Clear Button for filtter

$(".clear-btn").click(function () {
  // Clear data-id attributes for elements with class 'search-result-info'
  $(".search-result-info").removeAttr("data-id");

  // Show all elements with class 'search-result-info'
  $(".search-result-info").show();

  // Uncheck checkboxes and radios
  $('input[type="checkbox"]').prop("checked", false);
  $('input[type="radio"]').prop("checked", false);
});

// Fillter Option clear

$("#f-close1").click(function () {
  // Clear data-id attributes for elements with class 'search-result-info'
  $(".search-result-info").removeAttr("data-id");
  $(".fillter-option").removeAttr("data-id");
  // Show all elements with class 'search-result-info'
  $(".search-result-info").show();
  // Remove the 'active' class from elements with class 'seattype'
  $(".seattype_1").removeClass("active");
  $(".seattype_2").removeClass("active");
  $(".fillter-option").hide();
});

$("#f-close2").click(function () {
  // Clear data-id attributes for elements with class 'search-result-info'
  $(".search-result-info").removeAttr("data-id");
  $(".fillter-option").removeAttr("data-id");
  // Show all elements with class 'search-result-info'
  $(".search-result-info").show();
  // Remove the 'active' class from elements with class 'seattype'
  $(".seattype_1").removeClass("active");
  $(".seattype_2").removeClass("active");
  $(".fillter-option").hide();
});

$("#f-close3").click(function () {
  // Clear data-id attributes for elements with class 'search-result-info'
  $(".search-result-info").removeAttr("data-id");
  $(".fillter-option").removeAttr("data-id");
  // Show all elements with class 'search-result-info'
  $(".search-result-info").show();
  // Remove the 'active' class from elements with class 'seattype'
  $('input[type="checkbox"]').prop("checked", false);
  $(".fillter-option").hide();
});

$(document).click(function (e) {
  if (!$(e.target).closest(".dropdownContain").length) {
    $(".dropdownContain .dropdown").removeClass("show");
  }
});

const locations = [
  "Delhi",
  "Dehradun",
  "New Delhi",
  "Dahod",
  // Add more locations as needed
];

const $input1 = $("#input1");
const $input2 = $("#input2");
const $input3 = $("#input3");
const $input4 = $("#input4");
const $locationListContainer1 = $("#locationListContainer1");
const $locationListContainer2 = $("#locationListContainer2");
const $locationListContainer3 = $("#locationListContainer3");
const $locationListContainer4 = $("#locationListContainer4");
const $searchResultCount1 = $("#searchResultCount1");
const $searchResultCount2 = $("#searchResultCount2");
const $searchResultCount3 = $("#searchResultCount3");
const $searchResultCount4 = $("#searchResultCount4");
const $locationDivContainer1 = $(".location-div-container1");
const $locationDivContainer2 = $(".location-div-container2");
const $locationDivContainer3 = $(".location-div-container3");
const $locationDivContainer4 = $(".location-div-container4");

// Leaving From input field functionality
$input1.on("input", function () {
  const inputValue = $input1.val().trim().toLowerCase();
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(inputValue)
  );
  $searchResultCount1.text(`(${filteredLocations.length})`);
  updateLocationList(
    $locationDivContainer1,
    filteredLocations,
    $locationListContainer1,
    $input1
  );
});

// Destination input field functionality
$input2.on("input", function () {
  const inputValue = $input2.val().trim().toLowerCase();
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(inputValue)
  );

  $searchResultCount2.text(`(${filteredLocations.length})`);
  updateLocationList(
    $locationDivContainer2,
    filteredLocations,
    $locationListContainer2,
    $input2
  );
});

// Destination input field functionality
$input3.on("input", function () {
  const inputValue = $input3.val().trim().toLowerCase();
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(inputValue)
  );

  $searchResultCount3.text(`(${filteredLocations.length})`);
  updateLocationList(
    $locationDivContainer3,
    filteredLocations,
    $locationListContainer3,
    $input3
  );
});

// Destination input field functionality
$input4.on("input", function () {
  const inputValue = $input4.val().trim().toLowerCase();
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(inputValue)
  );

  $searchResultCount4.text(`(${filteredLocations.length})`);
  updateLocationList(
    $locationDivContainer4,
    filteredLocations,
    $locationListContainer4,
    $input4
  );
});

function updateLocationList(
  $locationDivContainer,
  filteredLocations,
  $locationListContainer,
  $input
) {
  $locationDivContainer.empty();

  filteredLocations.forEach((location) => {
    const $locationDiv = $('<div class="location-div">');
    $locationDiv.html(`
        <div>
          <img class="img-fluid" src="assets/img/icon/location.png" alt="location">
        </div>
        <div class="location-name">
          <h6>${location}</h6>
          <p>${location}</p>
        </div>
      `);

    $locationDiv.on("click", function () {
      // Update the input field value with the selected location
      $input.val(location);

      // After selecting an option, hide the location list
      $locationListContainer.hide();
    });

    $locationDivContainer.append($locationDiv);
  });

  $locationListContainer.show();
}

// Hide location list dropdown when clicking outside the document
$(document).click(function (event) {
  if (
    !$(event.target).closest(
      ".location-div-container1, .location-div-container2, .location-div-container3, .location-div-container4"
    ).length
  ) {
    // Close the location list dropdown if the click is outside the containers
    $locationListContainer1.hide();
    $locationListContainer2.hide();
    $locationListContainer3.hide();
    $locationListContainer4.hide();
  }
});

// LOCATION SWITCH
$(document).ready(function () {
  // Handle click on switch location icon
  $("#switchLocation").click(function () {
    // Swap the selected values of the two dropdowns
    var selectedFrom = $(".dynamicSelectFrom").val();
    var selectedTo = $(".dynamicSelectTo").val();

    // Use Select2 methods to set the values and trigger the change event
    $(".dynamicSelectFrom").val(selectedTo).trigger("change.select2");
    $(".dynamicSelectTo").val(selectedFrom).trigger("change.select2");
  });

  // toggle visibility of the div
  // Cache elements for efficiency
  const $input1 = $("#input1");
  const $locationListContainer = $("#locationListContainer");

  $input1.on("keyup", function () {
    const inputValue = $input1.val().trim();
    const isInputEmpty = inputValue === "";

    // Toggle visibility based on input value
    $locationListContainer.toggle(!isInputEmpty);
  });

  $(".nav-toggle").click(function () {
    //get collapse content selector
    var collapse_content_selector = $(this).attr("href");

    //make the collapse content to be shown or hide
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css("display") == "none") {
      } else {
      }
    });
  });

  //search Modification
  $("#modify").click(function () {
    // Toggle the disabled state of the input field
    $(".myInput").prop("disabled", function (i, val) {
      return !val;
    });

    // Change the button name based on the input field state
    var buttonText = $(".myInput").prop("disabled") ? "Modify" : "Search";
    $("#modify").text(buttonText);
  });

  // Assuming you have a function to handle option selection
  // Here, I'm using a click event for demonstration purposes
  $(".location-div-container").on("click", ".location-div", function () {
    // Handle option selection logic here

    // After selecting an option, hide the location list
    $locationListContainer.hide();
  });

  $(".pickuptime-nav").click(function () {
    //get collapse content selector
    var collapse_content_selector = $(this).attr("href");

    //make the collapse content to be shown or hide
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css("display") == "none") {
      } else {
      }
    });
  });

  $(".travelOperator-nav").click(function () {
    //get collapse content selector
    var collapse_content_selector = $(this).attr("href");

    //make the collapse content to be shown or hide
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css("display") == "none") {
      } else {
      }
    });
  });

  $(".droptime-nav").click(function () {
    //get collapse content selector
    var collapse_content_selector = $(this).attr("href");

    //make the collapse content to be shown or hide
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css("display") == "none") {
      } else {
      }
    });
  });

  $(".droptpoint-nav").click(function () {
    //get collapse content selector
    var collapse_content_selector = $(this).attr("href");

    //make the collapse content to be shown or hide
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css("display") == "none") {
      } else {
      }
    });
  });

  // Popup From focus animation
  $(".text-field-input").on("focus", function () {
    $(this).closest(".field-wrapper").addClass("focused");
  });

  $(".text-field-input").on("blur", function () {
    if ($(this).val() === "") {
      $(this).closest(".field-wrapper").removeClass("focused");
    }
  });

  // Filtter input field click

  $(".seattype_1").click(function () {
    var thisdataid = $(this).data("type");
    $(".search-result-info").hide();
    $(`.${thisdataid}`).show();
  });

  $(".seattype_2").click(function () {
    var thisdataid = $(this).data("type");
    $(".search-result-info").hide();
    $(`.${thisdataid}`).show();
  });

  // svg color Change
  $(".busSeat-item a").click(function () {
    $("#boardingDroppingbtn").hide();
    $("#busDetail").show();
    var seatprice = 0;
    var seatid = "";
    if ($(this).attr("data-iselect") == "true") {
      $(this).removeAttr("data-iselect");
      $(this).find("path, polygon, circle, rect").attr("fill", "#fff");
      $(this).find("path, polygon, circle, rect").attr("stroke", "#5A596B");
    } else {
      $(this).attr("data-iselect", true);
      $(this).find("path, polygon, circle, rect").attr("fill", "#F96604");
      $(this).find("path, polygon, circle, rect").attr("stroke", "#5A596B");
    }
    $('.busSeat-item a[data-iselect="true"]').each(function () {
      seatid += (seatid != "" ? "," : "") + $(this).data("seat");
      seatprice += $(this).data("price");
    });
    $(".selectedSeatNo h6, .selectedSeatNo").html(seatid);
    $(".selectedSeatPrice h4, .selectedSeatPrice").html("₹" + seatprice);
    $(".selectedSeatNo h5").html(
      $('.busSeat-item a[data-iselect="true"]').length
    );
    if ($('.busSeat-item a[data-iselect="true"]').length > 0) {
      $("#boardingDroppingbtn").show();
      $("#busDetail").hide();
    }
  });

  $("#uncheck").click(function () {
    $('input[type="checkbox"]').prop("checked", false);
  });

  // $("#alluncheck").click(function () {
  //   $('input[type="checkbox"]').prop("checked", false);
  //   $('input[type="radio"]').prop("checked", false);
  // });
});

// $("#alluncheck").click(function () {
//     // Uncheck checkboxes and radios
//     $('input[type="checkbox"]').prop("checked", false);
//     $('input[type="radio"]').prop("checked", false);

//     // Clear data-id attributes for elements with class 'search-result-info'
//     $(".search-result-info").removeAttr("data-id");
// });

// Home page bus name active on click
document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items
  const menuItems = document.querySelectorAll(".pvt-bus-item");

  // Add click event listener to each menu item
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove active class from all menu items
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to the clicked menu item
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items
  const menuItems = document.querySelectorAll(".seattype_1");

  // Add click event listener to each menu item
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove active class from all menu items
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to the clicked menu item
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items
  const menuItems = document.querySelectorAll(".seattype_2");

  // Add click event listener to each menu item
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove active class from all menu items
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to the clicked menu item
      this.classList.add("active");
    });
  });
});

// date picker for Home page
$("#datepicker").datepicker({
  minDate: 0,
  dateFormat: "dd, M y",
});
// date picker for Search page
$("#searchdatepicker").datepicker({
  minDate: 0,
  dateFormat: "D, dd M yy",
});

// date slider for search page
$(".date-nav").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 10,
    },
  },
});

document.querySelector("#showAll").addEventListener("click", toggle);
function toggle(event) {
  if (document.getElementById("spoiler").style.display == "none") {
    event.target.innerText = "Show Less";
    document.getElementById("spoiler").style.display = "";
  } else {
    event.target.innerText = "Show All (14)";
    document.getElementById("spoiler").style.display = "none";
  }
}

function next() {
  document.getElementById("bd-info").style.display = "none";
  document.getElementById("bd-detail").style.display = "block";
}

function back() {
  document.getElementById("bd-detail").style.display = "none";
  document.getElementById("bd-info").style.display = "block";
}

function next2() {
  document.getElementById("bd-info2").style.display = "none";
  document.getElementById("bd-detail2").style.display = "block";
}
function back2() {
  document.getElementById("bd-detail2").style.display = "none";
  document.getElementById("bd-info2").style.display = "block";
}

function next3() {
  document.getElementById("bd-info3").style.display = "none";
  document.getElementById("bd-detail3").style.display = "block";
}
function back3() {
  document.getElementById("bd-detail3").style.display = "none";
  document.getElementById("bd-info3").style.display = "block";
}

function next4() {
  document.getElementById("bd-info4").style.display = "none";
  document.getElementById("bd-detail4").style.display = "block";
}
function back4() {
  document.getElementById("bd-detail4").style.display = "none";
  document.getElementById("bd-info4").style.display = "block";
}
