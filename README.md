# Feed Reader

A web-based application that reads RSS feeds.

___

## Table of Contents
- [Feed Reader](#feed-reader)
    - [Table of Contents](#table-of-contents)
    - [Purpose](#purpose)
    - [Motivation](#motivation)
    - [Project Overview](#project-overview)
        - [Why this Project?](#why-this-project)
        - [How will I complete this project?](#how-will-i-complete-this-project)
    - [How To Run Application](#how-to-run-application)
    - [Author](#author)
    - [Acknowledgements](#acknowledgements)

___

## Purpose

Build a complete test suite using [Jasmine](//https://jasmine.github.io/), an independant, behavior-driven development framework for testing JavaScript code. I will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

___

## Motivation

The [Feed Reader Testing Project](https://github.com/udacity/frontend-nanodegree-feedreader) is part of the core curriculum for completing the [Udacity Front-End Developer Nanadegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

This project represents the opportunity to write effective tests that require analyzing multiple aspects of an application including the HTML, CSS and JavaScript. Good tests give me the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

___

## Project Overview

In this project I am given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I come in.

___

### Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether I work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

___

### How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

___

## How To Run Application

1. Fork or clone the GitHub [repository](#https://github.com/priyaka-xo/Feed-Reader) 
2. View the file ```index.html``` in the browser of your choice 

___

## Author

Priya Prabhvinder Kaur
For comments or questions, contact me at kaurpvinder@gmail.com

___

## Acknowledgements

1. Udacity [JavaScript Testing](https://www.udacity.com/course/ud549) course

2. Ryan Boris [Udacity FEND P4 Walkthrough](https://youtu.be/7kOBXPbDmyw)

3. Jasmine (https://jasmine.github.io/2.0/introduction.html)

4. Matthew Cranford Feed Reader Walkthrough
    https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/

    https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/

    https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/

    https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/

___