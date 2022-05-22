export const customAsync = (api:any, minute:number) => {
  return new Promise((resolve) => 
  setTimeout(() => {resolve(api)},minute));
}

