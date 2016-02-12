/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have urls', function() {
            for(var x = 0; x < allFeeds.length; x++){
                expect(allFeeds[x].url).toContain('http://');
            }
        });


        it('have names', function() {
            for(var x = 0; x < allFeeds.length; x++){
                expect(allFeeds[x].name).toBeDefined();
            }
        });

    });

    describe('The menu', function(){
        it('is hidden by default', function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        it('toggles when clicked', function(){
            $('.menu-icon-link').click();

                expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();

            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    });



        describe('Initial Entries', function() {
            beforeEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });

            it('has more than 0 entries', function() {
                expect($('.entry-link').length).toBeGreaterThan(0);
            });
        });


    

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
