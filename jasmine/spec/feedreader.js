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
    
    describe('RSS Feeds', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('contains defined URL feed that is not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(null);
                expect(feed.url.length).not.toBe(0);
            }
         });
        

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('contains defined name that is not empty', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(null);
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {
        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-icon-link');
    

        /* This test ensures the menu element is
         * hidden by default.
         */

        it('menu element hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu changes visibility when menu icon clicked', function() {
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {
        const feed = document.querySelector('.feed');
        const entry = feed.getElementsByClassName('entry')

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at  
         * least a single .entry element within the .feed container.
         * loadFeed() is asynchronous 
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('feeds load at least single entry', function() {
            expect(feed.children).not.toBeNull();
            expect(feed.children.length).toBeGreaterThan(0);    
        });

        it('there is at least a single .entry element within .feed container', function() {
            expect(entry).toBeDefined();
            expect(entry).not.toBeNull();
            expect(entry.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
            let firstFeed;
            let secondFeed;
    
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */

        beforeEach(function (done) {
            loadFeed(0, function () {
                firstFeed = document.getElementsByClassName('feed')[0].innerHTML;

                loadFeed(1, function() {
                    secondFeed = document.getElementsByClassName('feed')[0].innerHTML;

                    done();
                });
            });
        });

        it('new feed content changes', function() {
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());
