function ViewModelHeader(fName, lName){
	this.firstName= ko.observable(fName);
	this.lastName= ko.observable(lName);
	
	this.fullName= ko.computed(() => this.lastName() + ", " + this.firstName());
}
/*function ViewModelItem(itemName, itemCost){
	this.itemName= ko.observable(itemName);
	this.itemCost= ko.observable(itemCost);
	this.qty= ko.observable(0);
	this.total= ko.computed((function() { return this.qty() ? (this.qty() * this.itemCost()): 0}).bind(this));
}*/

var vmItem= {
	"itemName": ko.observable('Pencils'),
	"qty": ko.observable(0),
	"itemCost": ko.observable(5)
};

vmItem.total= ko.computed((function() { return this.qty() ? (this.qty() * this.itemCost()): 0}).bind(vmItem));


var vm = new ViewModelHeader("Aditya", "Raju");
//var vmItem = new ViewModelItem("Pencils", 5.5);
ko.applyBindings(vm, $("#header")[0]);
ko.applyBindings(vmItem, $("#content")[0]);
