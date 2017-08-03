# MyReads: A Book Lending App
### An Udacity React Nanodegree Program Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Project Overview

 A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library to be used to persist information as you interact with the application.

## Requirements

The app is dependent on the following technologies to install and run:
* [Node](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/package/npm)
* [Git](https://help.github.com/articles/set-up-git/)

## Installation
1. Via the command-line, navigate to a directory where you will install the app
1. Download or clone repo `git clone https://github.com/arosa81/react-p1-myreads.git`
1. `cd react-p1-myreads`
1. `npm install`
1. `npm start` OR `yarn start`

**If the app doesn't automatically open in your default browser, navigate to http://localhost:3000**

## App Functionality
In this application, the main page displays a list of "shelves", each of which contains a number of books. The three shelves are:
  * Currently Reading
  * Want to Read
  * Read

* Click on the control attached to each book and select the shelf that you would like to move the book to
* Click on the `+` icon to search for additional books.<br>
  The available search terms include:
    `'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'`
* Any books that are assigned new shelfs will be displayed on the main page.
* Click on the back '<-' button to return to the main page. All app activity is saved.
