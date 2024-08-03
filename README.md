# Website with Recipes

![website picture](https://i.ibb.co/HFJw3XC/My-Collages.jpg)

## Description
Website with Recipes is a web application that allows users to browse recipe categories, search for recipes by keywords, and get detailed information about each recipe. This is a learning project created to demonstrate skills in working with React and React Router.

## Tech Stack
- React
- React Router
- Fetch API
- Materialize CSS

## Installation and Running the Project

1. Clone the repository:

    ```bash
    git clone https://github.com/unclebusy/website-recipes.git
    cd website-shop
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the project:

    ```bash
    npm start
    ```

The project will be available at [http://localhost:3000](http://localhost:3000)

## How to Use
- Go to [http://localhost:3000](http://localhost:3000) after starting the project.
- On the home page, you will see a list of categories. Click on any category to see a list of meals.
- Use the search field at the top of the page to search for meals by keywords.
- Click on any meal to see detailed information and the recipe.

## Project Structure

```plaintext
website-recipes/
│
├── public/                 # Static files
├── src/                    # Application source code
│   ├── components/         # React components
│   │   ├── CategoryItem.js
│   │   ├── CategoryList.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Meal.js
│   │   ├── MealList.js
│   │   ├── Preloader.js
│   │   └── Search.js
│   ├── pages/              # React pages
│   │   ├── About.js
│   │   ├── Category.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── NotFound.js
│   │   └── Recipe.js
│   ├── api.js              # API calls
│   ├── config.js           # Configuration files
│   └── App.js              # Main application component
│
├── .gitignore              # Git ignore files and directories
├── package.json            # NPM scripts and dependencies
└── README.md               # Project documentation
