import { AxiosInstance } from 'axios';

export class HttpRequest<T> {
  constructor(private readonly service: AxiosInstance,) {
    this.service = service;
  }

  get(url:string,callback:any) {
    this.service.get(url)
    .then((_response)=>{
      callback(_response);
    }).catch((error)=>{
      this.error(error)
    })
  }
  post(url:string, data:any,callback:any) {
    return this.service.post(url, data)
    .then((_response)=>{
      callback(_response);
    }).catch((error)=>{
      this.error(error)
    })
  }
  patch(url:string, data:any) {
    return this.service.patch(url, data)
  } 
  delete(url:string) {
    return this.service.delete(url)
  }
  error(error:any,msg?:string) {
    throw new Error(`Service Error Status Code : < ${error.response.status} > `, error);
  }
}