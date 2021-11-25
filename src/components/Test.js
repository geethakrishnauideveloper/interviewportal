 import React,{useState,useEffect} from "react";
import {useNavigate,useParams } from "react-router-dom";


function Test(){

    let axlist = []
    let testarr = []
    let currtest = localStorage.getItem("test");
    testarr = JSON.parse(currtest);
    // console.log(testarr)
    axlist = testarr.json


  let history = useNavigate();

    var ansoptn = null
    var multioptn = []

    let {id} = useParams();
    let {num} = useParams();

    let curnum
    let testindx

    // console.log(id);
    // console.log(num);
    
    let testquest = []
    let testname
    let options = []
    let type = "Multiple-Response"
    let limit


//-----------------Intial loop for retriving question and options from URL-----------------//
  for(let i=0;i<axlist.length;i++)
  {
   if(axlist[i]._id == id)
   {
    testindx = i
    testname =axlist[i].name
    limit = axlist[i].questions.length
    for(let j=0;j<limit;j++)
    {
      if(axlist[i].questions[j]._id == num)
      {
        curnum = j
        if(curnum <= testarr.corctans.length-1)
        {
          testarr.corctans.splice(curnum,1)
          localStorage.setItem("test", JSON.stringify(testarr))
        }
      }
    }
    testquest = axlist[i].questions[curnum]
    options = testquest.options
    if(testquest.type == type)
    {
      type = "Multiple-Response"
    }
    else{
        type = "Single" 
    }
    // console.log(type)
   }
  }



//-----------------------previous button---------------------//
  let prevquest = () => {
    let prevpage = axlist[testindx].questions[curnum-1]._id

    if(axlist[testindx].questions[curnum].type == "Multiple-Response")
  {
    let counter = 0
    if(axlist[testindx].questions[curnum].correctOptionIndex.length == multioptn.length)
  {
    for(let i=0;i<axlist[testindx].questions[curnum].correctOptionIndex.length;i++)
    {
      for(let j=0;j<multioptn.length;j++)
      {
        if(axlist[testindx].questions[curnum].correctOptionIndex[i] == parseInt(multioptn[j]))
        {
         counter++
        }
      }
    }
    // console.log(counter)
    if(counter == multioptn.length)
    {
      testarr.ans[curnum]=multioptn
      testarr.corctans.push("correct")
      multioptn = []
    }
    else{
      testarr.ans[curnum]=multioptn
      testarr.corctans.push("wrong")
      multioptn = []
    }
  }
  else{
    testarr.ans[curnum]=multioptn
    testarr.corctans.push("wrong")
    multioptn = []
  }
}
  else
  {
    // console.log(ansoptn)
    // console.log(axlist[testindx].questions[curnum].correctOptionIndex)

   if(axlist[testindx].questions[curnum].correctOptionIndex == ansoptn)
   {
    testarr.ans[curnum]=ansoptn
    testarr.corctans.push("correct")
   }
   else{
    testarr.ans[curnum]=ansoptn
    testarr.corctans.push("wrong")
   }
  }
  localStorage.setItem("test", JSON.stringify(testarr))
    history("/test/"+id+"/"+prevpage);
    window.location.reload(false)
  }




//-----------------------next button---------------------//
 let nextquest = () => {
  
  let nextpage = axlist[testindx].questions[curnum+1]._id
  // console.log(ansoptn)
  // console.log(multioptn)
  // console.log(axlist[testindx].questions[curnum].correctOptionIndex)
  
  if(axlist[testindx].questions[curnum].type == "Multiple-Response")
  {
    let counter = 0
    if(axlist[testindx].questions[curnum].correctOptionIndex.length == multioptn.length)
  {
    for(let i=0;i<axlist[testindx].questions[curnum].correctOptionIndex.length;i++)
    {
      for(let j=0;j<multioptn.length;j++)
      {
        if(axlist[testindx].questions[curnum].correctOptionIndex[i] == parseInt(multioptn[j]))
        {
         counter++
        }
      }
    }
    // console.log(counter)
    if(counter == multioptn.length)
    {
      testarr.ans[curnum]=multioptn
      testarr.corctans.push("correct")
      multioptn = []
    }
    else{
      testarr.ans[curnum]=multioptn
      testarr.corctans.push("wrong")
      multioptn = []
    }
  }
  else{
    testarr.ans[curnum]=multioptn
    testarr.corctans.push("wrong")
    multioptn = []
  }
}
  else
  {
    // console.log(ansoptn)
    // console.log(axlist[testindx].questions[curnum].correctOptionIndex)

   if(axlist[testindx].questions[curnum].correctOptionIndex == ansoptn)
   {
    testarr.ans[curnum]=ansoptn
    testarr.corctans.push("correct")
   }
   else{
    testarr.ans[curnum]=ansoptn
    testarr.corctans.push("wrong")
   }
  }
  localStorage.setItem("test", JSON.stringify(testarr))
  history("/test/"+id+"/"+nextpage);
  window.location.reload(false)
}




//-----------------------finish button---------------------//
 let finish = () => {
  if(axlist[testindx].questions[curnum].type == "Multiple-Response")
  {
    let counter = 0
    if(axlist[testindx].questions[curnum].correctOptionIndex.length == multioptn.length)
  {
    for(let i=0;i<axlist[testindx].questions[curnum].correctOptionIndex.length;i++)
    {
      for(let j=0;j<multioptn.length;j++)
      {
        if(axlist[testindx].questions[curnum].correctOptionIndex[i] == parseInt(multioptn[j]))
        {
         counter++
        }
      }
    }
    // console.log(counter)
    if(counter == multioptn.length)
    {
        testarr.ans[curnum]=multioptn
        testarr.corctans.push("correct")
        multioptn = []
    }
    else{
        testarr.ans[curnum]=multioptn
        testarr.corctans.push("wrong")
        multioptn = []
    }
  }
  else{
    testarr.ans[curnum]=multioptn
    testarr.corctans.push("wrong")
    multioptn = []
}
  }
  else
  {
  if(axlist[testindx].questions[curnum].correctOptionIndex == ansoptn)
  {
    testarr.ans[curnum]=ansoptn
   testarr.corctans.push("correct")
  }
  else{
    testarr.ans[curnum]=ansoptn
    testarr.corctans.push("wrong")
  }
 }
  localStorage.setItem("test", JSON.stringify(testarr))
  history("/finish")
 }





//----------------------handle radio changes----------------------//
 let handleRadio = event =>{
  ansoptn=event.target.value
  event.target.checked=true
  // console.log(ansoptn)
}


 

//----------------------handle checkbox changes----------------------//
 let handleCheck = event =>{
   let temparr = multioptn
   if(temparr.includes(event.target.value)==true)
   {
    let indx = temparr.indexOf(event.target.value)
    temparr.splice(indx, 1)
   }
   else{
    temparr.push(event.target.value)
   }
   multioptn = temparr
 }




//---------------------displaying question & options---------------------//
 if(type == "Single")
 {
    let ansarr = []
    let temparr = []
    let temp = localStorage.getItem("test");
    temparr = JSON.parse(temp);
    ansarr = temparr.ans
    // console.log(ansarr[curnum])
    // console.log(curnum)
   
  return(
    <div class="container">
        <div class="row">
        <h1 style={{textAlign:"left",fontFamily:"sans-serif",fontWeight:500}}>My Interview Portal</h1>
            <hr/>
            <form>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading" style={{textAlign:"left"}}>{testname}</div>
                    <div class="panel-body">
                        <form style={{textAlign:"left",paddingLeft:15}}>
                            <label >{testquest.questionText}</label>

                            {/* ---------------------setting options of Radio--------------------- */}
                            {
                             (typeof ansarr[curnum] == "undefined")
                             ?<>
                               {options.map((optn,index) =>(
                              <div>
                              <input  id={index} onClick={handleRadio} type="radio" name={"option"+num} value={index}/><label style={{fontFamily:"sans-serif",fontWeight:500,paddingLeft:5}}>{optn}</label>
                              </div>
                              ))}</>
                             :<>
                             <div style={{display:"none"}}>{ansoptn = ansarr[curnum]}</div>
                              {options.map((optn,index) => (
                               (ansarr[curnum] == index.toString())
                               ?
                                <div>
                                <input  id={index} defaultChecked={true} onClick={handleRadio} type="radio" name={"option"+num} value={index}/><label style={{fontFamily:"sans-serif",fontWeight:500,paddingLeft:5}}>{optn}</label>
                                </div>
                               :<div>
                                <input  id={index} onClick={handleRadio} type="radio" name={"option"+num} value={index}/><label style={{fontFamily:"sans-serif",fontWeight:500,paddingLeft:5}}>{optn}</label>
                                </div>
                               ))} </>}
                            
                        </form>
                    </div>
                      
                    {curnum == limit-1 ? 
                    <div class="panel-footer" style={{textAlign:"right"}}> 
                    <a style={{marginRight:960}} onClick={()=>prevquest()} class="btn btn-success">Previous</a>
                    <a onClick={()=>finish()} class="btn btn-danger">Finish</a>
                    </div>
                    :curnum == 0 ? 
                     <div class="panel-footer" style={{textAlign:"left"}}> 
                     <a onClick={()=>nextquest()} class="btn btn-success">Next</a>
                     </div>
                     :
                      <div class="panel-footer" style={{textAlign:"left"}}> 
                      <a onClick={()=>prevquest()} class="btn btn-success">Previous</a>
                      <a onClick={()=>nextquest()} class="btn btn-success" style={{marginLeft:15}}>Next</a>
                      </div>                     
                     }

            </div>
        </div></form>
    </div>
    </div>
  );
 }
else{
    let ansarr = []
    let temparr = []
    let temp = localStorage.getItem("test");
    temparr = JSON.parse(temp);
    ansarr = temparr.ans

  return(
    <div class="container">
        <div class="row">
        <h1 style={{textAlign:"left",fontFamily:"sans-serif",fontWeight:500}}>My Interview Portal</h1>
            <hr/>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading" style={{textAlign:"left"}}>{testname}</div>
                    <div class="panel-body">
                        <form style={{textAlign:"left",paddingLeft:15}}>
                        <label><b>{testquest.questionText}</b></label>
                                <div>
                                
                             {/* ---------------------setting options of Checkbox--------------------- */}

                              {
                                (typeof ansarr[curnum] == "undefined")
                                ?<>
                                 { options.map((optn,index) =>(
                                <div>
                                <input onClick={handleCheck} type="checkbox" name={"option"+num} value={index}/>
                                <label style={{fontFamily:"sans-serif",fontWeight:500,paddingLeft:5}} for={index}>{optn}</label>
                                </div>))}
                                </>
                                :<>
                                <div style={{display:"none"}}>{multioptn = ansarr[curnum]}</div>
                                 { options.map((optn,index) =>(
                                  (((ansarr[curnum]).includes(index.toString())) == true)
                                    ?<>
                                     <div>
                                     <input onClick={handleCheck} defaultChecked={true} type="checkbox" name={"option"+num} value={index}/>
                                     <label style={{fontFamily:"sans-serif",fontWeight:500,paddingLeft:5}} for={index}>{optn}</label>
                                     </div></>
                                    :<><div>
                                     <input onClick={handleCheck} type="checkbox" name={"option"+num} value={index}/>
                                     <label style={{fontFamily:"sans-serif",fontWeight:500,paddingLeft:5}} for={index}>{optn}</label>
                                     </div></>
                                   ))
                                  }</>
                               }

                                </div>
                        </form>
                    </div>
          
                    {curnum == limit-1 ? 
                    <div class="panel-footer" style={{textAlign:"right"}}> 
                    <a onClick={()=>prevquest()} style={{marginRight:960}} class="btn btn-success">Previous</a>
                    <a onClick={()=>finish()} class="btn btn-danger">Finish</a>
                    </div>
                    :curnum == 0 ? 
                     <div class="panel-footer" style={{textAlign:"left"}}> 
                     <a onClick={()=>nextquest()} class="btn btn-success">Next</a>
                     </div>
                     :
                      <div class="panel-footer" style={{textAlign:"left"}}> 
                      <a onClick={()=>prevquest()} class="btn btn-success">Previous</a>
                      <a onClick={()=>nextquest()} class="btn btn-success" style={{marginLeft:15}}>Next</a>
                      </div>                     
                     }

              </div>
        </div>
    </div>
    </div>
  );
}

}
export default Test;
