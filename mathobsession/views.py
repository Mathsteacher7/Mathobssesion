# from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from jwt_auth.models import User
from rest_framework.permissions import IsAuthenticated
# from .permissions import IsOwnerOrReadOnly
from .models import Exercise, Subject, Sketch
from .serializers import ExerciseSerializer, SubjectSerializer, PopulatedExerciseSerializer, PopulateSubjectSerializer, SketchSerializer, UserSerializer
# Create your views here.

class ExerciseListView(APIView):


    def get(self, _request):
        exercise = Exercise.objects.all()
        serializer = PopulatedExerciseSerializer(exercise, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ExerciseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=422)

class ExerciseDetailView(APIView):

    def get(self, _request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = PopulatedExerciseSerializer(exercise)
        return Response(serializer.data)

    def put(self, request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = ExerciseSerializer(exercise, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=422)

class SubjectListView(APIView):

    def get(self, _request):
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data)

class SubjectDetailView(APIView):
    def get(self, _request, pk):
        subject = Subject.objects.get(pk=pk)
        serializer = PopulateSubjectSerializer(subject)
        return Response(serializer.data)

class SketchListView(APIView):

    def get(self, _request):
        sketches = Sketch.objects.all()
        serializer = SketchSerializer(sketches, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SketchSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=422)

class SketchDetailView(APIView):

    def get(self, _request, pk):
        sketch = Sketch.objects.get(pk=pk)
        serializer = SketchSerializer(sketch)
        return Response(serializer.data)


class ProfilelView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
