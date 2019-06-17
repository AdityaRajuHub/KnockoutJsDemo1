			function DefaultItem() {
				this.itemName= ko.observable('');
				this.itemCost= ko.observable('');
				this.placeholderName= 'Enter Name';
				this.placeholderCost= 'Enter Cost';
			}
			
			function ItemModel(itemName, itemCost){
				var self= this;
				this.itemName= ko.observable(itemName);
				this.itemCost= ko.observable(itemCost);
				this.qty= ko.observable(1);
				this.total= ko.computed(function() { return self.qty() ? (self.qty() * self.itemCost()): 0});
			}

			items= {
				type: "Stationary",
				vmItemArr: ko.observableArray([
					/*new ItemModel("Pen", 7.50),
					new ItemModel("Book", 17.50),
					new ItemModel("Notes", 20.25),
					new ItemModel("Bottle", 15.00),
					new ItemModel("Bag", 70.00),
					new ItemModel("Shoes", 200.00)*/])
			}
			//items.cnt= ko.computed((()=> this.vmItemArr().length).bind(items));


			var defaultItem = new DefaultItem();
			//var vmItem = new ViewModelItem("Pencils", 5.5);
			//ko.applyBindings(defaultItem, $("#addItemDiv")[0]);
			//ko.applyBindings(items, $("#itemsDiv")[0]);
			function ParentModel() {
				var self= this;
				self.defaultItem= defaultItem;
				self.items= ko.observable(items);
			
				self.addItem= function(){
					self.items().vmItemArr.push(new ItemModel(self.defaultItem.itemName(), self.defaultItem.itemCost()));
					self.defaultItem.itemName('');
					self.defaultItem.itemCost('');
				};
				
				self.deleteItem= function(index){					
					self.items().vmItemArr.splice(index,1);
				};
			}
			var parentModel= new ParentModel();
			ko.applyBindings(parentModel);
