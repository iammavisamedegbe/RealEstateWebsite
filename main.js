function toggleNav(){
  const navigation = document.querySelector('#Mynav')
  if (navigation.className=="main-nav"){
      navigation.className+=" responsive";
  }
  else {
    navigation.className="main-nav"
  }

};

const current = document.querySelector('#currentimg');
const  imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img =>
  img.addEventListener('click', imgClick));

function imgClick(e) {
    current.src = e.target.src;
}

// map
 function myMap() {
   var location ={lat:5.603717, lon:-0.186964};
   var map = new google.maps.Map(document.querySelector('#map'),{
     zoom:5,
     center: location
   });
 };







const testText = document.querySelector(".text")
const testName = document.querySelector(".name")
const testAuthor = document.querySelectorAll('.author')

const Testimonial = [
{
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  name:"consectetur adipisicing"
},
{
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  name:"tempor incididunt"
},
{
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  name:"eiusmod tempor "
},
{
  text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  name:"nostrud exercitation"
}];


addTestimonial(0)
testAuthor.forEach((author, idx)=>{
	author.addEventListener('click',(e)=>{
		addTestimonial(idx);
		author.classList.add('selected')
	});
	});

function addTestimonial(idx){
	const testimonial = Testimonial[idx];
	testName.innerHTML= testimonial.name;
	testText.innerHTML= testimonial.text;
	testAuthor.forEach(author => {
	  author.classList.remove('selected');
});
}
