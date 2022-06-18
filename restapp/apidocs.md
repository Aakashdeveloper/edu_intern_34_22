// page 1
# List of City
>> https://zomatoajulypi.herokuapp.com/location
>> http://localhost:9700/location

# List of Restaurants
>> https://zomatoajulypi.herokuapp.com/restaurants
>> http://localhost:9700/restaurants

# List of Restaurants wrt to City
>> https://zomatoajulypi.herokuapp.com/restaurant?stateId=1
>> http://localhost:9700/restaurants?state_id=4

# List of MealType
>> https://zomatoajulypi.herokuapp.com/quicksearch
>> http://localhost:9700/mealType

//Page2
# List of restaurants on basis of meal
>> https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=
>> http://localhost:9700/restaurants?meal_id=4

# Filter on basis of cuisine
>> https://zomatoajulypi.herokuapp.com/filter/4?cuisine=1
>> http://localhost:9700/filters/3?cuisineId=4

# Filter on basis of cost
>> https://zomatoajulypi.herokuapp.com/filter/1?hcost=1000&lcost=500
>> http://localhost:9700/filters/1?lcost=300&hcost=900

# Sort (low to High)
http://localhost:9700/filters/1?lcost=300&hcost=900&sort=-1
http://localhost:9700/filters/1?cuisineId=4&sort=-1

//page3
# Details of restaurants
>> http://zomatoajulypi.herokuapp.com/details/1
>> http://localhost:9700/details/618776b162a1816f885956bf