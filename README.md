# ImageScroll

> A Simple JQuery plugin for `li` included in `ul` to scroll

#### View [**demo**](http://codepen.io/zenjayjay/pen/vOOzBP)

## Install

### linked with script tag
Just include the plugin after the JQuery js file:
```html
<script src="./jquery.js"></script>
<script src="./ImageScroll.js"></script>
```

### Install with bower

```command
bower install --save ImageScroll
```

## Usage
Such as this HTML:
```html

<ul id="imgs">
    <li>1
    </li><li>2
    </li><li>3
    </li><li>4
    </li>
</ul>
```
And the CSS:
```css
#imgs li {
  display:inline-block;
  width:100px;
  height:50px;
  line-height:50px;
  text-align:center;
  list-style-type:none;
}
```
Minimal usage:

```js
$('#imgs').imageScroll();
```

Example setting options with default values:

```js
$('#imgs').imageScroll({
  orientation:"left",<!--scroll orientation:top,right,bottom,left optional-->
  speed:600,
  interval:1500,
  hoverPause:true,<!--true when you want to hover `ul` and the scrolling will pause-->
  callback:function(){ return false;}<!--this will be invoked after every scroll motion-->
 });
```

## $(selector).imageScroll([options]);
Example:
```js
$('#imgs').imageScroll({
  orientation:"left",
  speed:600,
  interval:1000,
  hoverPause:true,
  callback:function(){
    var ordinal = $(this).find("img").first().attr("src");
    <!-- console.log(ordinal); -->
    $(this).next("span").text("CallbackDisplay: hidden "+ordinal+"!");
  }
 });
```

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work.

## License

Copyright (c) 2014, Jogis. (MIT License)
