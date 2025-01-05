When building an app you need to think about what state do you need.

Redux Store Design

1. Identify what state exist in the app.
2. Identify how that state changes over time.
3. Group together common pieces of state.
4. Create a slice for each grou

In this project we have three inputs those are state because it causes the screen to re-render.

1 for Car Name - name (string)
1 for Car Cost - cost (number)
1 for Car Search - searchTerm (string)

List of cars will change so you will need a state for cars
Cars also has mulitple pieces of information types to it so it can be an (object)
cars can be an Array of objects with - id, name, and cost
cars - []{id, name, cost}

Derived state - Values we can calculate using existing state

Total cost - (number)

matchedCars

2. How is this state changing over time?

changing the name input - changeName
changing the cost input - changeCost
changing the search term - changeSearchTerm

adding a car - addCar
removing a car - removeCar

3. Group together common pieces of state

State can be seperated

State releated to adding cars
name
cost

State related to list of cars
searchTerm
cars

4. Create a slice for a group

Assign function/reducers with the state
