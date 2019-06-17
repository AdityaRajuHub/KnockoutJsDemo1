var ko= require('../node_modules/knockout');

var viewModel= (fName, lName) => {
	this.firstName= ko.observable(fName);
	this.lastName= ko.observable(lName);
	
	this.fullName= ko.computed(() => this.lastName + "," + this.firstName);
}


var vm = new viewModel("Aditya", "Raju");

