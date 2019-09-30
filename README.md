![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Project 4: Mathobssesion!

<img width="1391" alt="Screenshot 2019-09-12 at 12 37 31" src="https://user-images.githubusercontent.com/49660544/64781215-400ede80-d55a-11e9-9ab4-ce105fba7109.png">

## Overview
Mathobsession is a virtual community where teachers can find and share exercises to be used by their pupils. The activities are mapped against the UK national curriculum and level of difficulty. 

[Launch Mathobsession](https://mathsobsession.herokuapp.com/)

## Project Brief and Technical Requirements

* **Build a full-stack application** by making our own back and front-end
* **Use a Python Django API** using Django REST Framework to serve our data from a Postgres database
* **Consume our API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers.
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end. Improve your employability by demonstrating a good understanding of testing principals.

## Project Execution

### Technologies Used
* HTML5
* CSS3
* SASS
* JavaScript (ES6)
* Git
* GitHub
* REACT
  * React-select
  * React star-ratings
  * React- Toastify
  * Filestack-react
* Webpack
* Bulma
* Django
* Python
* Heroku

### Approach Taken

#### Planning 

* **Team communication and ways of working** - We spent the first day agreeing how we would work together, keep each other informed of progress and ultimately create a consistent code. We used Trello to break down the project and keep track of progress. We also spent a few minutes every morning reviewing what we achieved the day before and what we would work towards that day. 

* **User Stories/Wireframes** - We discussed the user journey we hoped to offer and created wireframes accordanly. We drafted the following pages:
* Home
* All Subjects list
* All Exercises with filter
* Exercises per Subject  
* Add Exercise
* Login
* Register
* Profile
* Profile Edit
 
##### Example:
![My First Board (1)](https://user-images.githubusercontent.com/49660544/64786319-178ce180-d566-11e9-8a59-ba9819142eb2.jpg)

* **Database Relationships** - Database relationships, as shown below. The MVP consisted of User, Exercise and Subject. Comments and Sub-subjects were extra features should time allowed. 

![My First Board](https://user-images.githubusercontent.com/49660544/64784841-f2e33a80-d562-11e9-9ff7-2f2c7f46bb56.jpg)

* **Project set-up** - Created a repository on GitHub, ensured both computers were Git ready, and we also created a development branch. We also installed the different packages necessary to start the project - e.g. Django, PIPENV and more. 

#### Execution
### Backend 

* **Technology used -** Django, Python and SQLite3

* **Approach used** 
* Started by creating the models 
```py
class Subject(models.Model):
    name = models.CharField(max_length=25)
    image = models.CharField(max_length=200, blank=True)
    icon = models.CharField(max_length=200, blank=True)
​
    def __str__(self):
        return self.name
​
class Sketch(models.Model):
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=200)
​
    def __str__(self):
        return self.name
​
​
class Exercise(models.Model):
    content = models.TextField()
    level = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(3)])
    user = models.ForeignKey(User, related_name='exercises', on_delete=models.CASCADE)
    subjects = models.ManyToManyField(Subject, related_name='exercises')
    sketch = models.ForeignKey(Sketch, related_name='exercises', blank=True, null=True, on_delete=models.CASCADE)
​
    def __str__(self):
        return f'{self.content} level {self.level}'
```

* Followed by view components to:
  * Exercise List 
  * Exercise Detail
  * Subject List
  * Subject Detail
  * Sketch List 
  * Sketch Detail
  * User Profile
  * Contact Us
 
Example:
```py
class ExerciseDetailView(APIView):
​
    def get(self, _request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = PopulatedExerciseSerializer(exercise)
        return Response(serializer.data)
​
    def put(self, request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = ExerciseSerializer(exercise, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=422)
```

* Followed by Serializers
In the model we have a many to many relationship between the Subject and the Exercise. For that we needed to create two serializer for each one of them, we will explain with the exercise serializers
```py
class ExerciseSerializer(serializers.ModelSerializer):
​
    user = UserSerializer(read_only=True)
​
    class Meta:
        model = Exercise
        fields = ('id', 'content', 'level', 'user', 'sketch', 'subjects',)
​
class PopulatedExerciseSerializer(ExerciseSerializer):
​
    sketch = SketchSerializer()
    subjects = SubjectSerializer(many=True)
    class Meta(ExerciseSerializer.Meta):
        fields = ('id', 'content', 'level', 'user', 'sketch', 'subjects',)
```
ExerciseSerializer only constains the id field of the Subject Model while PopulatedExerciseSerializer contains all fields of the Subject Model. That was necessary to avoid an infinity loop when of Exercise - Subject - Exercise - etc. 

* Sketches database

To enhance the user experience we created a database of sketches which the user could choose from when uploading a new exercise. 


### Authentication 


### Frontend 

* **Technology used -** React and Bulma

New Exercise

The Exercise Index page consumes an API



We felt that it was important fot the user to be able to filter Exercises by Subject therefore we created the filter below which sits in the Index page. 

```js
filterExercises(){
    const [field, order] = this.state.sortTerm.split('|')
    const filtered = _.filter(this.state.data, data => {
      const chosenState = this.state.subject
      return (this.state.subject ? new RegExp(chosenState).test(data.subjects.map(s => s.name)) : true)
    })
    return _.orderBy(filtered, [field], [order])

  }
```

Ract Select was used to allow the user to choose the disareable sketch from the API 



## Wins and Blockers
### Wins
* MVP

### Blockers


## Future Content
* Add Comments and Sub-subjects relationship to the database
* 

## What we learnt
