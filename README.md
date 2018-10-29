# Exercise Converter
---
## Overview
This module allows exercises to be converted into steps. It uses public data available from the University of Vermonts website:  http://www.uvm.edu/hrs/healthy/archive/steps.html
---

## Install
Make sure your version of Node.js is at least 7.6.0.

```npm install --save exerciseconverter```
---

## Exercises  
```
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
```
---

## toSteps(exercise, intensity, minutes)
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
**Exercise (string):** => see Exercises  
**Intensity (number):** => 1, 2, 3, 4 or 5  
**Minutes (number):** => *any number*  
---
## toStepsAvgHR(exercise, averageHeartRate, minutes)
This async function expects an exercise, average heart rate and minutes to return the number of 'steps' taken.

#### Example Call
```
toStepsAvgHR("Boxing", 180, 1).then(function(steps){
  console.log(steps);
}).catch(function(error){
  console.error("Error: ", error);
})

//output: 418
```
#### All Input Criteria 
**Exercise (string):** => see Exercises  
**Average Heart Rate (number) [intensity]:** => 0 - 69 [1], 70 - 89 [2], 90 - 119 [3], 120 - 149 [4], 150+ [5]    
**Minutes (number):** => *any number*  
---
## toStepsHRpm(exercise, [HRminute1, HRminute2 ...])
This async function expects an exercise, and an array of heart rate values for each minute of exercise to return the number of 'steps' taken.

#### Example Call
```
toStepsHRpm("aerobics", [120, 140, 150, 165, 180, 176, 162, 104, 101, 80]).then(function(steps){
  console.log(steps);
}).catch(function(error){
  console.error("Error: ", error);
})

//output: 1872
```  

#### All Input Criteria  
**Exercise (string):** => see Exercises  
**Heart Rate [HRminute1, HRminute2 ...] (object):** [120, 120, 40, 30, 60...]  
  
## Additional Information

Currently looking for feedback and requests for enhancements. Datasets, format etc. subject to change. v1.0.0 to be the first package where a normal release cycle of little change/big change etc will begin.

* Get in touch with any questions [email](mailto:aiden.g@live.co.uk)
* [Raise issues or requests](https://github.com/GallagherAiden/exerciseConverter/issues/new)
