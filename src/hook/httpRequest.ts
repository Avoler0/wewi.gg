import { AxiosInstance } from 'axios';

export class HttpRequest<T> {
  constructor(private readonly service: AxiosInstance,) {
    this.service = service;
  }
  get(url:string) {
    return new Promise((resolve,reject)=>{
      this.service.get(url)
      .then((_response)=>{
        resolve(_response)
      })
      .catch((_error)=>{
        reject(_error)
      })
    })
  }
  post(url:string, data:any) {
    return new Promise((resolve,reject)=>{
      this.service.post(url,data)
      .then((_response)=>{
        resolve(_response)
      })
      .catch((_error)=>{
        reject(_error)
      })
    })
  }
  patch(url:string, data:any) {
    return new Promise((resolve,reject)=>{
      this.service.patch(url,data)
      .then((_response)=>{
        resolve(_response)
      })
      .catch((_error)=>{
        reject(_error)
      })
    })
  }
  delete(url:string) {
    return new Promise((resolve,reject)=>{
      this.service.delete(url)
      .then((_response)=>{
        resolve(_response)
      })
      .catch((_error)=>{
        reject(_error)
      })
    })
  }

}