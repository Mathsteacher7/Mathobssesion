from django.urls import path

from .views import ExerciseListView, ExerciseDetailView, SubjectListView

urlpatterns = [
    path('exercises/', ExerciseListView.as_view()),
    path('subjects/', SubjectListView.as_view()),
    # path('exercises/<int:pk>/', ExerciseDetailView.as_view()),
    path('exercises/<int:pk>/', ExerciseDetailView.as_view()),
]
