from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class APIWithAuth(APIView):

    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, *args, **kwargs):
        return Response({
            'auth': True,
            'description': 'this api uses session auth'
        })


class APIWithoutAuth(APIView):

    def get(self, *args, **kwargs):
        return Response({
            'auth': False,
            'description': 'this api is unauthenticated'
        })
