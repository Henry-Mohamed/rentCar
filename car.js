var cars = [{manufacturer:'BMW',module:'X6',description:'The new BMW X6 is back with a more assertive design.',price:200,image:'https://www.largus.fr/images/images/bmw-x6-2020-vue-avant.jpg?width=612&quality=80',availability:true},
{manufacturer:'Audi',module:'R8',description:'This is the first GT two-seater coupe of the brand that rivals the historic brands of this segment',price: 250,image:'https://img.sportauto.fr/news/2019/02/28/1536213/1920%7C1280%7C189dc49e331f034dca8d7df0.jpg',availability:true},
{manufacturer:'Toyota ',module:'supra',description: 'The car has experienced four successive generations and a fifth later.',price: 300,image:'https://img.autoplus.fr/news/2019/01/19/1534944/1200%7C800%7C877462d2397820384ebba1ee.jpg',availability:true},
{manufacturer:'Mercedes ',module:'class c',description:'The car has experienced four successive generations and a fifth later.',price: 150,image: 'https://www.largus.fr/images/images/mercedes-classe-c-2018-berline-03.jpg?width=612&quality=80',availability:true},
{manufacturer:'volkswagen ',module:'golf 7',description: 'The car has experienced four successive generations and a fifth later.',price: 200,image:'https://www.drivesouthafrica.com/wp-content/uploads/2018/04/VW-Golf-GTI.jpeg',availability:true},
{manufacturer:'Nissan ',module:'GTR',description:'The car has experienced four successive generations and a fifth later.',price: 400,image:'https://www.motorlegend.com/modules/breve/photos/src/nissan-gt-r-14198-1-P.jpg',availability:true}
];



//{'Toyota ','supra','The car has experienced four successive generations and a fifth later.',300,'https://img.autoplus.fr/news/2019/01/19/1534944/1200%7C800%7C877462d2397820384ebba1ee.jpg'}
function Car(){
	var car = {};
	car.manufacturer='';
	car.module = '';
	car.description = '';
	car.availability = true;
	car.price = 0 ;
	car.image = '';
	car.addCar = addCar;
	car.rentCar = rentCar;
	car.returnCar = returnCar;
	return car;
}
var addCar = function(manufacturer , carModule , description , price , image){
 this.manufacturer = manufacturer ;
 this.module = carModule;
 this.description = description;
 this.price = price;
 this.image = image;
}
var rentCar= function(){
	if(this.availability === true){
		this.availability = false;
	}
}
var returnCar = function(){
	if(this.availability === false){
		this.availability = true;
	}
}
     
