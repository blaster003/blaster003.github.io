$('body').terminal({
    help: function() {
        this.echo(`Commands:
help: Returns a list of usable commands`);
    },
}, {
    greetings: 'Discremental initiated.\nEstimated time of full startup: 100 years'
});