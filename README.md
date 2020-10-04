# Mini-Bookstore

A simple Bookstore built in Angular, based on the description and mock-ups provided as part of an exercise (see `Bookstore - Exercise.pdf` and `Bookstore - View.pdf`).

#### Design choices

Besides implementing the look and feel of the 3 pages requested, I also attempted to make them as functional as possible without the existence of a back-end server - but with the consideration that one could later easily be added.
For instance and until the app is restarted:
* Any book added from the respective form is appended to the existing ones and can be interacted with. It will show in search results and will have its own details page.
* If any new categories are used in book creation, they will also be available in the related filter of the search page.
* Clicking to buy a book updates a cart counter on the top right - even though there does not exist a separate page for that.
* Marking a book as favorite persists across page navigation.

## Installation

```
cd bookstore-app
npm install
```

## Usage

```
ng serve --o
```

## Built With

* [Angular](https://angular.io/) 10.1.3
* [ng-zorro](https://ng.ant.design/docs/introduce/en) 10.0.0
* [Bootstrap](https://getbootstrap.com/) 4.5.2

## Screenshots

![alt text](https://i.imgur.com/BaTbtXN.png)

![alt text](https://i.imgur.com/MMNfjdb.png)

![alt text](https://i.imgur.com/yjbWpD0.png)