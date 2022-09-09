import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                'X-RapidAPI-Key': '7690bdaaa0msh22e0069016bf948p1ee798jsnd4ed0c17fa22',
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
            },
            setParams:{
                type: 'movies',
                page: '6'
            }
        });
        return next.handle(req);
    }
}

