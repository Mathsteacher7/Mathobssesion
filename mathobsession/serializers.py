from rest_framework import serializers
from jwt_auth.serializers import UserSerializer
from .models import Exercise, Subject

class ExerciseSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Exercise
        fields = ('id', 'content', 'level', 'user')

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ('id', 'name')

class PopulatedExerciseSerializer(ExerciseSerializer):

    subjects = SubjectSerializer(many=True)
    class Meta(ExerciseSerializer.Meta):
        fields = ('id', 'content', 'level', 'user', 'subjects')

class PopulateSubjectSerializer(SubjectSerializer):

    exercises = ExerciseSerializer(many=True)
    class Meta(SubjectSerializer.Meta):
        fields = ('id', 'name', 'exercises')
