# missingJS

If you don't like jQuery and you are working only with Pure Javascript, here I've done some advanced prototype functions for HTMLElement, HTMLCollection and NodeList API's. They can make your work with Javascript more easier and nicer. I will give some examples. All functions are independent for each other. The cause to did it that way it that sometime you may need just a couple of them and not the whole package/list.

## Examples:

  - Loop via HTMLCollection returned from `querySelectorAll`

``` javascript
document.querySelectorAll('.item').each(function(el) {
  console.log(el); 
});

// or via NodeList
document.getElementsByClassName('item').each(function(el) {
  console.log(el); 
});
```

  - Add/Remove event listener to one or more elements at once
  
  ``` javascript
// signle element
document.getElementById('ID').on('click', function(ev) {
  console.log(ev); 
});

// or collection of elements
document.querySelectorAll('.item').on('click', function(ev) {
  console.log(ev); 
});

// remove event listener (cb function is optional)
document.querySelectorAll('.item').off('click', cb);
```

 - Make a chaining search
 
``` javascript
// search for body tag on document
document.find('body');
// select element with getElementsByClassName and search for elements with class .sub-item within
document.getElementsByClassName('item').find('.sub-item');
// select element with querySelectorAll and search for elements with class .sub-item within
document.querySelectorAll('.item').find('.sub-item');
// select element with querySelectorAll and search for elements with class .item within and then for .sub-item
document.querySelector('#header').find('.item').find('.sub-item'));
// -> gives you elements with class .sub-item in elements with class .item
```


   - Class
``` javascript
// add class
document.querySelector('#header').addClass('className');
// remove class
document.querySelectorAll('.itme').removeClass('className');
// check if className is set on the element
document.querySelector('#header').hasClass('className');
// toggle class
document.querySelector('#header').toggleClass('className');
``` 

   - Show/Hide elements
``` javascript
// hide elements
document.querySelectorAll('.item').hide();
// show element
document.querySelector('#header').show();
``` 


   - Remove elements
``` javascript
document.querySelector('#header').remove();
``` 

   - Get closest element
``` javascript
document.querySelector('.item').closest('header');
``` 

   - Insert new element before/after existing one
``` javascript
// Before
document.createElement('div').insertBef('#header');
// After
document.createElement('div').insertAft('#header');
``` 
