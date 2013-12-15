Section = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        //this.$el.attr('id',this.id);
        this.$el.addClass('nice');
        var template = _.template( $("#section_template").html(), {} );
        this.$el.html( template );
        // populate the form with another view(s)?
        _.each(this.options.inputs, function(e) {
        }
    }
});

FormGroup = Backbone.View.extend({
    className: 'form-group'
});

FormGroupSelect = FormGroup.extend({

});
