var app = new function() {
  this.element = document.getElementById('countries');
  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Ireland', 'Luxembourg'];
  this.Count = function(data) {
    var element   = document.getElementById('counter');
    var name = 'country';
    if (data) {
      if (data > 1) {
        name = 'countries';
      }
      element.innerHTML = data + ' ' + name ;
    } else {
      element.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.countries.length > 0) {
      for (i = 0; i < this.countries.length; i++) {
        data += '<section>';
        data += '<div class="countryName">' + this.countries[i] + '</div>';
        data += '<div class="editBtn"><i class="fas fa-edit" onclick="app.Edit(' + i + ')"></i></div>';
        data += '<div class="deleteBtn"><i class="far fa-trash-alt" onclick="app.Delete(' + i + ')"></i></div>';
        data += '</section>';
      }
    }
    this.Count(this.countries.length);
    return this.element.innerHTML = data;
  };
  this.Add = function () {
    element = document.getElementById('add-name');
    // Get the value
    var country = element.value;
    if (country) {
      // Add the new value
      this.countries.push(country.trim());
      // Reset input value
      element.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var element = document.getElementById('edit-name');
    // Display value in the field
    element.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = element.value;
      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}