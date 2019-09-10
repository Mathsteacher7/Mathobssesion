from rest_framework import serializers
from jwt_auth.serializers import UserSerializer
from .models import Exercise, Subject, Sketch

class ExerciseSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Exercise
        fields = ('id', 'content', 'level', 'user', 'sketch', 'subjects')

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ('id', 'name', 'image')

class SketchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sketch
        fields = ('id', 'name', 'url')


class PopulatedExerciseSerializer(ExerciseSerializer):

    sketch = SketchSerializer()
    subjects = SubjectSerializer(many=True)
    class Meta(ExerciseSerializer.Meta):
        fields = ('id', 'content', 'level', 'user', 'sketch', 'subjects')

class PopulateSubjectSerializer(SubjectSerializer):

    exercises = ExerciseSerializer(many=True)
    class Meta(SubjectSerializer.Meta):
        fields = ('id', 'name', 'exercises')
