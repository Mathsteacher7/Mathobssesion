from django.urls import path

from .views import ExerciseListView, ExerciseDetailView, SubjectListView, SubjectDetailView, SketchListView, SketchDetailView

urlpatterns = [
    path('exercises/', ExerciseListView.as_view()),
    path('subjects/', SubjectListView.as_view()),
    path('sketches/', SketchListView.as_view()),
    path('sketches/<int:pk>', SketchDetailView.as_view()),
    path('subjects/<int:pk>/', SubjectDetailView.as_view()),
    path('exercises/<int:pk>/', ExerciseDetailView.as_view()),
]
