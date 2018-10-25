# Exercise Converter
---
## Overview
##### This module allows exercises to be converted into steps. It uses public data available from the University of Vermonts website:  http://www.uvm.edu/hrs/healthy/archive/steps.html
---

## Install
Make sure your version of Node.js is at least 7.6.0.

```npm install --save exerciseconverter```

---
## toSteps()
This async function expects an exercise, intensity and minutes to return the number of 'steps' taken.

#### Example Call
```
toSteps("Boxing", 3, 10).then(function(steps){
  console.log(steps);
}).catch(function(error){
  console.error("Error: ", error);
})

//output: 3480
```
#### All Input Criteria 
**Intensity (number):** => 1, 2, 3, 4 or 5
**Exercise (string):** =>
aerobics
badminton
basketball
bicycling
bowling
boxing
canoeing
choppingwood
circuittraining
dancing
elliptical
firewoodtasks
americanfootball
gardening
golfing
groceryshopping
handball
hiking
horsebackriding
housework
iceskating
judo
jumpingrope
karate
kickboxing
mowing
orienteering
painting
pilates
pingpong
racquetball
rakingleaves
rollerskating
rowing
running
scubadiving
skiing
snowshoveling
snowboarding
football
softball
squash
stairclimbing
stretching
swimming
taekwondo
tennis
trampoline
volleyball
car
wateraerobics
weighttraining
yardwork
yoga

**Minutes (number):** => *any number*

## Additional Information
* Get in touch with any questions [email](mailto:aiden.g@live.co.uk)
