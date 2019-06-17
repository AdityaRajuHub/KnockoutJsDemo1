			function DefaultItem() {
				this.itemName= ko.observable('');
				this.itemCost= ko.observable('');
				this.placeholderName= 'Enter Name';
				this.placeholderCost= 'Enter Cost';
				this.addItem= ()=> {
					items.vmItemArr.push(new ItemModel(this.itemName(), this.itemCost()));
					this.itemName('');
					this.itemCost('');
				};
				this.deleteItem= (index)=> {
					items.vmItemArr.splice(index,1);
				};
			}
			
			function ItemModel(itemName, itemCost){
				this.itemName= ko.observable(itemName);
				this.itemCost= ko.observable(itemCost);
				this.placeholderName= 'Enter Name';
				this.placeholderCost= 'Enter Cost';
				this.qty= ko.observable(1);
				this.total= ko.computed((function() { return this.qty() ? (this.qty() * this.itemCost()): 0}).bind(this));
			}

			items= {
				type: "Stationary",
				vmItemArr: ko.observableArray([
					/*new ItemModel("Pen", 7.50),
					new ItemModel("Book", 17.50),
					new ItemModel("Notes", 20.25),
					new ItemModel("Bottle", 15.00),
					new ItemModel("Bag", 70.00),
					new ItemModel("Shoes", 200.00)*/]),
				deleteItem: ((index)=> {
					items.vmItemArr.splice(index,1)
				}).bind(this)
			}
			//items.cnt= ko.computed((()=> this.vmItemArr().length).bind(items));


			var defaultItem = new DefaultItem();
			//var vmItem = new ViewModelItem("Pencils", 5.5);
			ko.applyBindings(defaultItem, $("#addItemDiv")[0]);
			ko.applyBindings(items, $("#itemsDiv")[0]);
