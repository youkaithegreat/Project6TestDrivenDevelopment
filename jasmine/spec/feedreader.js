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

    //Checks RSS Feeds Arrays
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //checks if it is a string and if it is an URL
        it('have urls', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                if (typeof allFeeds[x].url != "string") {
                    throw new Error("Url isn't a string!");
                }
                expect(allFeeds[x].url).toContain('http://');
            }
        });



        //checks if it is a string and if it is defined
        it('have names', function() {
            for (var x = 0; x < allFeeds.length; x++) {
                if (typeof allFeeds[x].name != "string") {
                    throw new Error("Name isn't a string!");
                }
                expect(allFeeds[x].name).toBeDefined();
            }
        });

    });

    //checks that the menu icons work properly. Menu should be hidden at end state
    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

        it('toggles when clicked', function() {

            $body = $('body');
            $menu = $('.menu-icon-link');
            $menu.click();

            expect($body.hasClass('menu-hidden')).toBe(false);
            $menu.click();

            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });


    //checks that content exists on the website
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('is empty', function() {
            expect($('.entry-link').length).toBeGreaterThan(0);
        });
    });

    //checks that feeds have different content
    describe('New Feed selection', function() {
        var firstFeed, secondFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
            firstFeed = $('.feed').html();
        });

        it('content changes', function(done) {
            loadFeed(1, function() {

                secondFeed = $('.feed').html();
            });
            expect(firstFeed).not.toEqual(secondFeed);
            done();
        });
    });

}());