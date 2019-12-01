//This will get all the person object contents sent the Exports class.

//var Person = require("./modules/Person"); //this is the lod sytle of exporting the javaScript FileList.
//Creating the object of the class and calling the great method.

import Person from './modules/Person';

var chandan =new Person("Chandan","Blue");
var omi =new Person("Omi","Green");
chandan.great();
omi.great();        