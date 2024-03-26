//data type of my object.

// persnal data..

interface person {
    name : string,
    fatherName : string,
    nationality : string,
    Student : Boolean,
    Qualification : String,
    age : number,
    phoneNumber : number | string,
    email : string,
    Gender : string,
    Address : string,
    Sibling : string | number, 
    placeofbirth : string,
    dateofbirth : any | number,
    bloodGroup : any,
    Height : string | number,
    weight : number | any,
    languageKnown : string,
    getting : string;
    religion : string,
    cast : String,
    motherTongue : string,
    belong : String,
    fatherOccupation : string,
    motherOccupation : string,
    materialStatus : String,
    goals : String,

    // fav food .
    favouriteFood1 : string,
    favouriteFood2 : string,
    favouriteFood3 : string,
    favouriteFood4 : string,
    favouriteFood5 : string,
    favouriteFood6 : string,

    // fav fast-food.
    favouritefastFood1 : string,
    favouritefastFood2 : string,
    favouritefastFood3 : String,
    favouritefastFood4 : String,
    favouritefastFood5 : String,
    favouritefastFood6 : String,

    // fav color.
    favouriteColor1 : string,
    favouriteColor2 : string,
    favouriteColor3 : string,
    favouriteColor4 : string,

    // fav Place.
    favouritePlace1 : string,
    favouritePlace2 : string,
    favouritePlace3 : string,
    favouritePlace4 : string,
    favouritePlace5 : string,
    favouritePlace6 : string,
    favouritePlace7 : string,
    favouritePlace8 : string,
    favouritePlace9 : string,
    favouritePlace10 : string,

    // fav city.
    favouriteCity1 : string,
    favouriteCity2 : string,
    favouriteCity3 : string,
    favouriteCity4 : string,
    favouriteCity5 : string,
    favouriteCity6 : string,
    
    // fav Picnic Point.
    PicnicPoint1 : string,
    PicnicPoint2 : string,
    PicnicPoint3 : string,
    PicnicPoint4 : string,
    PicnicPoint5 : string,
    PicnicPoint6 : string,
    PicnicPoint7 : string,
    PicnicPoint8 : string,
    PicnicPoint9 : string,
    PicnicPoint10 : string,

    // fav country.
    favouriteCountry1 : String,
    favouriteCountry2 : String,
    favouriteCountry3 : String,
    favouriteCountry4 : String,
    favouriteCountry5 : String,
    favouriteCountry6 : String,

    // fav fruite,
    favouriteFruite1 : String,
    favouriteFruite2 : string,
    favouriteFruite3 : string,
    favouriteFruite4 : String,
    favouriteFruite5 : String,
    favouriteFruite6 : String,

    // fav hobby.
    Hobbies1 : string,
    hobbies2 : string,
    hobbies3 : string,
}

// person object.

// persnal biodata.
let person :person = {
    name : "Laiba Naz",
    fatherName : "Gulfaraz Ahmed",
    nationality : "Pakistan",
    Student : true,
    Qualification : "inter",
    age : 18,
    phoneNumber : "307xxxxx28",
    email : "rajlaiba65@gmail.com",
    Gender : "Female",
    Address : "xyz baldia town ittehad town karachi",
    Sibling : "5 sister and 2 brother", 
    placeofbirth : "Karachi",
    dateofbirth : "24th.12.2005",
    bloodGroup : "AB positive",
    Height : "5 feet 6 inches",
    weight : "55 kg ", 
    languageKnown : "English, urdu, hindko, punjabi", 
    getting : "Getting respect",
    religion : "Islam",
    cast : "Rajpoot",
    motherTongue : "Hindko",
    belong : "kpk",
    fatherOccupation : "Late",
    motherOccupation : "House Wife",
    materialStatus : "single",
    goals : "Successful life",
    
    // fav food.
    favouriteFood1 : "Biryani",
    favouriteFood2 : "Shami Kabab",
    favouriteFood3 : "korma",
    favouriteFood4 : "Mater rice",
    favouriteFood5 : "White Karai",
    favouriteFood6 : "Allu Kabab",

    // fav fast-food.
    favouritefastFood1 : "Biryani",
    favouritefastFood2 : "Zinger burger",
    favouritefastFood3 : "zinger roll",
    favouritefastFood4 : "fries",
    favouritefastFood5 : "Broast",
    favouritefastFood6 : "Chicken roll",

    // fav color.
    favouriteColor1 : "Black",
    favouriteColor2 : "yellow",
    favouriteColor3 : "brown",
    favouriteColor4 : "green", 

    // fav Place.
    favouritePlace1 : "Naran",
    favouritePlace2 : "Kagan",
    favouritePlace3 : "Sawat",
    favouritePlace4 : "Maree",
    favouritePlace5 : "Malam Jabba",
    favouritePlace6 : "Gilgit",
    favouritePlace7 : "Nathiya Gali",
    favouritePlace8 : "Mansara",
    favouritePlace9 : "Margala",
    favouritePlace10 : "Chitral",

    
    // fav city.
    favouriteCity1 : "Islamabad",
    favouriteCity2 : "Lahore",
    favouriteCity3 : "Karachi",
    favouriteCity4 : "Multan",
    favouriteCity5 : "Rawalpindi",
    favouriteCity6 : "Sailkot",

    // fav Picnic Point.
    PicnicPoint1 : "Sea View",
    PicnicPoint2 : "Clifton",
    PicnicPoint3 : "Port Grand",
    PicnicPoint4 : "Fiesta",
    PicnicPoint5 : "Garden",
    PicnicPoint6 : "Adventure Land",
    PicnicPoint7 : "Paradies",
    PicnicPoint8 : "Dream World",
    PicnicPoint9 : "World Water Park",
    PicnicPoint10 : "PAF Musium",
    
    //  fav country.
    favouriteCountry1 : "Maldives",
    favouriteCountry2 : "Dubai",
    favouriteCountry3 : "South Africa",
    favouriteCountry4 : "Landon",
    favouriteCountry5 : "Singapore",
    favouriteCountry6 : "Turkey",

    // fav fruite.
    favouriteFruite1 : "Mango",
    favouriteFruite2 : "Orange",
    favouriteFruite3 : "Apple",
    favouriteFruite4 : "Strawberry",
    favouriteFruite5 : "Banana",
    favouriteFruite6 : "Grapes",

    // fav hobby.
    Hobbies1 : "Outing",
    hobbies2 : "Cricket",
    hobbies3 : "Shopping",
}

//print person
console.log(person);