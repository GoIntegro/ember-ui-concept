import Ember from 'ember';

export default Ember.View.extend({
  willInsertElement:function(){
    Ember.$('.transition.demo .button')
    .on('click', function() {
      var animation = Ember.$(this).text();
      if(typeof animation == 'string') {
        animation = animation.toLowerCase();
      }
      Ember.$('.transition.demo .image')
      .each(function(index, value){
        var $this = Ember.$(this);
        setTimeout(function() {
          $this.transition(animation);
        }, index * 100)});
    });
  }

});
