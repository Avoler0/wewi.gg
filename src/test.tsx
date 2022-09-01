


export default function Test(){
  function fun1(){
    console.log("fun1");
    
  }
  function fun2(){
    console.log("fun2");
    
  }
  function fun3(event:any){
    console.log("fun3");
  }
  return (
    <>
    <div onClick={fun1}>1
      <p onClick={fun2}>2
        <div onClick={fun3}>3

        </div>
      </p>
    </div>
    </>
  )

}