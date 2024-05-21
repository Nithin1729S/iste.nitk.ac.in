from corsheaders.middleware import CorsMiddleware
from corsheaders.signals import check_request_enabled

def cors_allow_any_port(sender, request, **kwargs):
    return request.META['HTTP_ORIGIN'].startswith("http://localhost:")

check_request_enabled.connect(cors_allow_any_port)

class CustomCorsMiddleware(CorsMiddleware):
    def process_request(self, request):
        if self.is_enabled(request) and 'HTTP_ORIGIN' in request.META:
            origin = request.META['HTTP_ORIGIN']
            if origin.startswith("http://localhost:"):
                request._cors_enabled = True
                request._cors_origin = origin
        return super().process_request(request)
