import { AxiosInstance } from 'axios';

export class HttpRequest<T> {
  constructor(private readonly service: AxiosInstance,) {
    this.service = service;
  }

  async get(url:string, callback:any) {
    await this.service.get(url).then((_response:any) => {
      if (callback) callback(_response);
      return _response;
    })
    .catch((error)=>{
      this.error(error)
    })
  }
  post(url:string, data:any) {
    return this.service.post(url, data)
  }
  patch(url:string, data:any) {
    this.service.patch(url, data);
  } 
  delete(url:string , callback:any) {
    this.service.delete(url).then((_response)=>{
      if (callback) callback(_response);
      return _response;
    })
    .catch((error)=>{
      if (callback) callback(error.response);
      return error.response;
    }
    );
  }
  error(error:any,msg?:string) {
    throw new Error(`Service Error Status Code : < ${error.response.status} > `, error);
  }
}