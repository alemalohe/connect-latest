
 TweenMax.from('.logo', 1.5, {  opacity: 0,  position:"relative",  right: 200,  delay: 1,  ease: Elastic.easeOut });
 TweenMax.from('.na-l1', 1.5, {  opacity: 0,  position:"relative",  left: 200,  delay: 1,  ease: Elastic.easeOut });
 TweenMax.from('.slide', 1.5, {  opacity: 0,  position:"relative",  top: 200,  delay: 1,  });


$(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.title', 1.5, {
            opacity: 0,
            position:"relative",
            top: 200,
            delay: 0.1,
            ease: Elastic.easeOut
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#companies'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });
 


 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.amina1', 1.5, {
            opacity: 0,
            position:"relative",
            top: 200,
            delay: 0.4,
            ease: Elastic.easeOut
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#companies'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });


 
 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.amina2', 1.5, {
            opacity: 0,
            position:"relative",
            top: 200,
            delay: 0.4,
            ease: Elastic.easeOut
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#companies'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });



 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('#services', 1.5, {
            opacity: 0,
            position:"relative",
            top: 200,
            delay: 0.2,
            ease: Elastic.easeOut
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#services'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });


 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.a-1', 1.5, {
            opacity: 0,
            position:"relative",
            top: 200,
            delay: 0.2,
            ease: Elastic.easeOut
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#services'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });


 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.itm-1', 1.5, {
            opacity: 0,
            position:"relative",
            right: 200,
            delay: 0.2,
            ease: Elastic.easeOut,
            rotation: 10,
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#services'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });


 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.itm-2', 1.5, {
            opacity: 0,
            position:"relative",
            left: 200,
            delay: 0.2,
            ease: Elastic.easeOut,
            rotation: 10,
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#services'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });





 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.img-1', 1, {
            opacity: 0,
            position:"relative",
            top: 100,
            delay: 0.2,
            ease: Elastic.easeOut,
           
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#gps'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });



 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.cont-2', 1, {
            opacity: 0,
            position:"relative",

            top: 100,
            delay: 0.2,
            ease: Elastic.easeOut,
            
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#gps'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });



 
 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.img-3', 1, {
            opacity: 0,
            position:"relative",
            top: 100,
            delay: 0.2,
            ease: Elastic.easeOut,
           
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#agri'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });



 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.cont-3', 1, {
            opacity: 0,
            position:"relative",

            top: 100,
            delay: 0.2,
            ease: Elastic.easeOut,
            
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#agri'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });





 
 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.img-4', 1, {
            opacity: 0,
            position:"relative",
            top: 100,
            delay: 0.2,
            ease: Elastic.easeOut,
           
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#imp'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });



 $(document).ready(function(){

  var controller = new ScrollMagic.Controller();
 
  var blockTween = new TweenMax.from('.cont-4', 1, {
            opacity: 0,
            position:"relative",

            top: 100,
            delay: 0.2,
            ease: Elastic.easeOut,
            
         });
 
  var ourscene = new ScrollMagic.Scene({
   triggerElement: '#imp'
 })
  .setTween(blockTween)//insted of tween it could have been a class toggle classToggle('#bla', 'class name')
  .addTo(controller);
 
 });


