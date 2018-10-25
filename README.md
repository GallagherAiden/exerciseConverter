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
This async function expects an exercise, intensity and minutes to return 

#### Example Call
```
toSteps("Boxing", "none", 10).then(function(steps){
  console.log(steps);
  //output: 3480
}).catch(function(error){
  console.error("Error: ", error);
})

```
#### All Input Criteria [ exercise, intensity ]
Where there is no intensity - the string "none" should be used.

Aerobics	low  
Aerobics	intense  
Badminton	casual  
Badminton	competitive  
Basketball	leisurely  
Bicycling	leisurely  
Bicycling	stationary  
Bowling	none  
Boxing	none  
Canoeing	none  
ChoppingWood	none  
CircuitTraining	none  
Dancing	none  
Elliptical	none  
Firewood	carrying  
Firewood	sawing  
Firewood	stacking  
AmericanFootball	none  
Gardening	light  
Gardening	heavy  
Gardening	weeding  
Golfing	cart  
Golfing	noCart  
GroceryShopping	none  
Handball	none  
Hiking	general  
Hiking	10-20lb  
Hiking	21-42lb  
HorsebackRiding	general  
HorsebackRiding	trotting  
Housework	light  
Housework	mopping  
Housework	scrubbing  
Housework	vacuuming  
Housework	windowCleaning  
IceSkating	none  
Judo	none  
JumpingRope	moderate  
JumpingRope	fast  
Karate	none  
Kickboxing	none  
Mowing	none  
Orienteering	none  
Painting	none  
Pilates	none  
PingPong	none  
Racquetball	casual  
Racquetball	competitive  
RakingLeaves	none  
RollerSkating	none  
Rowing	light  
Rowing	moderate  
Running	10  
Running	8  
Running	6  
Running	5  
ScubaDiving	none  
Skiing	crossCountryIntense  
Skiing	crossCountryModerate  
Skiing	crossCountrySlow  
Skiing	downhill  
Skiing	water  
SnowShoveling	none  
Snowboarding	light  
Snowboarding	moderate  
Football	recreational  
Football	competitive  
Softball	none  
Squash	none  
StairClimbing	machine  
StairClimbing	moderate  
StairClimbing	slow  
StairClimbing	vigorous  
Stretching	none  
Swimming	backstroke  
Swimming	breaststroke  
Swimming	butterfly  
Swimming	freestyle  
Swimming	leisure  
Swimming	treading  
TaeKwonDo	none  
Tennis	doubles  
Tennis	singles  
Trampoline	none  
Volleyball	leisurely  
Volleyball	game  
Car	washing  
Car	waxing  
WaterAerobics	none  
WeightTraining	moderate  
WeightTraining	vigourous  
YardWork	none  
Yoga	none  

## Additional Information
* Get in touch with any questions [email](mailto:aiden.g@live.co.uk)
* See a match example [here](https://youtu.be/yxTXFrAZCdY)
