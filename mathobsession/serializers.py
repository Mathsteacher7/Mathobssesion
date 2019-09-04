from rest_framework import serializers
from jwt_auth.serializers import UserSerializer
from .models import Exercise, Subject

class ExerciseSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Exercise
        fields = ('id', 'content', 'level', 'user', 'subject')

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = ('id', 'name')
